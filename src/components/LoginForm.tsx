import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import closeFormButton from "../assets/images/close.png";
import showPasswordImage from "../assets/images/visible.png";
import hidePasswordImage from "../assets/images/hide.png";
import successImage from "../assets/images/success.png";

const LoginForm = ({
  onClose,
  setIsLoggedIn,
}: {
  onClose: () => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
          const tokens = {
            accessToken: "your_access_token",
            refreshToken: "your_refresh_token",
          };
          Cookies.set("tokens", JSON.stringify(tokens), { expires: 7 });

          setShowForm(false);

          setIsLoggedIn(true);
        } else {
          setLoginError(true);
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      {showForm ? (
        <form className="authorization-form" onSubmit={handleLogin}>
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
        <div className="success-message">
          <p>Успішний вхід!</p>
          <img src={successImage} alt="success" />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
