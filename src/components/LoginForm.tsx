import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import closeFormButton from "../assets/images/close.png";
import showPasswordImage from "../assets/images/visible.png";
import hidePasswordImage from "../assets/images/hide.png";
import successImage from "../assets/images/success.png";

interface LoginFormProps {
  onClose: () => void;
  setIsLoggedIn: (loggedIn: boolean, userHash: string | undefined) => void;
}

const LoginForm: FC<LoginFormProps> = ({ onClose, setIsLoggedIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://dbd-rest-api.eremenko.top/wp-json/authorization/user/v1/twitch-user-action",
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

          setShowSuccessMessage(true);
          setShowForm(false);
          setIsLoggedIn(true, userHash);
        } else {
          setLoginError(true);
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
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
        <form className="authorization-form parent" onSubmit={handleLogin}>
          <button type="button" className="close-button" onClick={onClose}>
            <img src={closeFormButton} alt="close" />
          </button>
          <div className="field-form">
            <label htmlFor="login">Логін:</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>
          <div className="field-form">
            <label htmlFor="password">Пароль:</label>
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
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="password-toggle-button"
              >
                <img
                  src={passwordVisible ? showPasswordImage : hidePasswordImage}
                  alt={passwordVisible ? "Hide" : "Show"}
                />
              </button>
            </div>
          </div>
          <button className="authorization-form-submit" type="submit">
            Увійти
          </button>
          {loginError && (
            <p className="authenticationError">
              Неправильний логін або пароль.
            </p>
          )}
        </form>
      ) : (
        <div className="success-message parent">
          <button type="button" className="close-button" onClick={onClose}>
            <img src={closeFormButton} alt="close" />
          </button>

          <p>Успішний вхід!</p>
          <img className="successImg" src={successImage} alt="success" />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
