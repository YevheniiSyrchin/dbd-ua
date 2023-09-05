import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import Overlay from "./Overlay";

const Navigation: FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegistrationForm(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationForm(true);
    setShowLoginForm(false);
  };

  const closeForm = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(false);
  };

  useEffect(() => {
    const tokens = Cookies.get("tokens");

    if (tokens) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("tokens");
    setIsLoggedIn(false);
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
        {isLoggedIn ? (
          <>
            <Link to="account" className="button">
              Аккаунт
            </Link>
            <button className="button" onClick={handleLogout}>
              Вийти
            </button>
          </>
        ) : (
          <>
            <button className="button" onClick={handleLoginClick}>
              Увійти
            </button>
            <button className="button" onClick={handleRegistrationClick}>
              Реєстрація
            </button>
          </>
        )}
      </div>
      {(showLoginForm || showRegistrationForm) && (
        <Overlay onClose={closeForm}>
          {showLoginForm && (
            <LoginForm onClose={closeForm} setIsLoggedIn={setIsLoggedIn} />
          )}
          {showRegistrationForm && <RegistrationForm onClose={closeForm} />}
        </Overlay>
      )}
    </nav>
  );
};

export default Navigation;
