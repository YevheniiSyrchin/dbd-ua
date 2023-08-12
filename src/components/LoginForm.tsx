import React, { useState } from "react";
import showPasswordImage from "../assets/images/visible.png";
import hidePasswordImage from "../assets/images/hide.png";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login form submitted:", { login, password });
  };

  return (
    <form className="authorization-form" onSubmit={handleLogin}>
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
    </form>
  );
};

export default LoginForm;
