import React, { useState } from "react";
import { isValidLogin, isValidPassword, isValidTwitchLink } from "./validation";
import showPasswordImage from "../assets/images/visible.png";
import hidePasswordImage from "../assets/images/hide.png";

const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [twitchAccount, setTwitchAccount] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [twitchAccountError, setTwitchAccountError] = useState("");

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
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

    console.log("Registration form submitted:", {
      login,
      password,
      twitchAccount,
    });
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
    <form className="authorization-form" onSubmit={handleRegistration}>
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
        {twitchAccountError && <p className="error">{twitchAccountError}</p>}
      </div>
      <button className="authorization-form-submit" type="submit">
        Зареєструватися
      </button>
    </form>
  );
};

export default RegistrationForm;
