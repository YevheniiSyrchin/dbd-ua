import React, { useState } from "react";
import { isValidLogin, isValidPassword, isValidTwitchLink } from "./validation";
import axios from "axios";
import closeFormButton from "../assets/images/close.png";
import showPasswordImage from "../assets/images/visible.png";
import hidePasswordImage from "../assets/images/hide.png";
import successImage from "../assets/images/success.png";

const RegistrationForm = ({ onClose }: { onClose: () => void }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [twitchAccount, setTwitchAccount] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [twitchAccountError, setTwitchAccountError] = useState("");
  const [loginTaken, setLoginTaken] = useState(false);
  const [showForm, setShowForm] = useState(true);

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
            "twitch-user-url": btoa(twitchAccount),
            "twitch-user-action": "register",
          },
        }
      );

      if (response.data && response.data.response) {
        const action = response.data.response["new-created-user-arr"]["action"];
        if (action === "created") {
          setShowForm(false);
        } else {
          setLoginTaken(true);
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleLoginChange = (value: string) => {
    setLogin(value);
    setLoginError("");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError("");
  };

  const handleTwitchAccountChange = (value: string) => {
    setTwitchAccount(value);
    setTwitchAccountError("");
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
              onChange={(e) => handleLoginChange(e.target.value)}
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
                onChange={(e) => handlePasswordChange(e.target.value)}
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
            <label htmlFor="twitchAccount">Посилання на Twitch аккаунт:</label>
            <input
              type="text"
              id="twitchAccount"
              value={twitchAccount}
              onChange={(e) => handleTwitchAccountChange(e.target.value)}
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
        <div className="success-message">
          <p>Успішна реєстрація!</p>
          <img src={successImage} alt="success" />
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
