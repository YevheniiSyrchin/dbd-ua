import React, { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Navigation: FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegistrationForm(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationForm(true);
    setShowLoginForm(false);
  };

  const overlayRef = useRef(null);

  const closeForm = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(false);
  };

  const handleFormClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <nav className="navContainer">
      <ul className="navigation">
        <li>
          <Link to="/" className="button">
            Головна
          </Link>
        </li>
        <li>
          <Link to="news" className="hidden">
            Новини
          </Link>
        </li>
        <li>
          <Link to="roulette" className="button">
            Рулетка
          </Link>
        </li>
      </ul>
      <div className="authorization">
        <button className="button" onClick={handleLoginClick}>
          Увійти
        </button>
        <button className="button" onClick={handleRegistrationClick}>
          Реєстрація
        </button>
      </div>
      {(showLoginForm || showRegistrationForm) && (
        <div className="formOverlay" onClick={closeForm} ref={overlayRef}>
          <div className="formContainer" onClick={handleFormClick}>
            {showLoginForm && <LoginForm onClose={closeForm} />}
            {showRegistrationForm && <RegistrationForm onClose={closeForm} />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
