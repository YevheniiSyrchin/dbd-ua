import React, { FC, useState, useEffect } from "react";
import { isValidLogin, isValidPassword, isValidTwitchLink } from "./validation";
import axios from "axios";
import Cookies from "js-cookie";
import closeFormButton from "../assets/images/close.png";
import showPasswordImage from "../assets/images/visible.png";
import hidePasswordImage from "../assets/images/hide.png";
import successImage from "../assets/images/success.png";

interface RegistrationFormProps {
  onClose: () => void;
  setIsLoggedIn: (loggedIn: boolean, userHash: string | undefined) => void;
}

const RegistrationForm: FC<RegistrationFormProps> = ({
  onClose,
  setIsLoggedIn,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [twitchAccount, setTwitchAccount] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [twitchAccountError, setTwitchAccountError] = useState<string | null>(
    null
  );
  const [loginTaken, setLoginTaken] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidLogin(login)) {
      setLoginError(
        "Логін повинен містити від 4 до 16 символів, тільки літери англійською, цифри та підкреслення."
      );
      return;
    }

    if (!isValidPassword(password)) {
      setPasswordError(
        "Пароль повинен містити від 4 до 16 символів, тільки літери та цифри."
      );
      return;
    }

    if (twitchAccount && !isValidTwitchLink(twitchAccount)) {
      setTwitchAccountError("Невірний формат посилання на Twitch аккаунт.");
      return;
    }

    try {
      const response = await axios.get(
        "https://dbd-rest-api.eremenko.top/wp-json/authorization/user/v1/twitch-user-action/",
        {
          params: {
            "twitch-user-login": btoa(login),
            "twitch-user-pass": btoa(password),
            "twitch-user-nickname": btoa(nickname),
            "twitch-user-url": btoa(twitchAccount),
            "twitch-user-action": "register",
          },
        }
      );

      if (response.data && response.data.response) {
        const action = response.data.response["new-created-user-arr"]["action"];
        if (action === "created") {
          setShowSuccessMessage(true);
          setShowForm(false);
          handleLoginAfterRegistration();
        } else {
          setLoginTaken(true);
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleLoginAfterRegistration = async () => {
    try {
      const response = await axios.get(
        `https://dbd-rest-api.eremenko.top/wp-json/authorization/user/v1/twitch-user-action`,
        {
          params: {
            "twitch-user-login": btoa(login),
            "twitch-user-pass": btoa(password),
            "twitch-user-action": "login",
          },
        }
      );

      if (response.data) {
        const loginSuccess = response.data.response["login-success"];

        if (loginSuccess === true) {
          const userHash = response.data.response["user-hash-encode"];

          Cookies.set("userHash", userHash, { expires: 365 });

          setShowForm(false);
          setIsLoggedIn(true, userHash);
        } else {
          setLoginError("Неправильний логін або пароль.");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [onClose, showSuccessMessage]);

  return (
    <div>
      {showForm ? (
        <form className="authorization-form" onSubmit={handleRegistration}>
          <button type="button" className="close-button" onClick={onClose}>
            <img src={closeFormButton} alt="close" />
          </button>
          <div className="field-form">
            <label htmlFor="login">Логін*:</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
            {loginError && <p className="error">{loginError}</p>}
          </div>
          <div className="field-form">
            <label htmlFor="password">Пароль*:</label>
            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={handleTogglePasswordVisibility}
                className="password-toggle-button"
              >
                <img
                  src={passwordVisible ? showPasswordImage : hidePasswordImage}
                  alt={passwordVisible ? "Hide" : "Show"}
                />
              </button>
            </div>
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div className="field-form">
            <label htmlFor="nickname">Нікнейм:</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>

          <div className="field-form">
            <label htmlFor="twitchAccount">Посилання на Twitch аккаунт:</label>
            <input
              type="text"
              id="twitchAccount"
              value={twitchAccount}
              onChange={(e) => setTwitchAccount(e.target.value)}
            />
            {twitchAccountError && (
              <p className="error">{twitchAccountError}</p>
            )}
          </div>
          <button className="authorization-form-submit" type="submit">
            Зареєструватися
          </button>
          {loginTaken && (
            <p className="registraionError">Цей логін вже зайнятий.</p>
          )}
        </form>
      ) : (
        <div className="success-message parent">
          <button type="button" className="close-button" onClick={onClose}>
            <img src={closeFormButton} alt="close" />
          </button>

          <p>Успішна реєстрація!</p>
          <img className="successImg" src={successImage} alt="success" />
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
