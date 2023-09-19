import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import Overlay from "./Overlay";

const Navigation: FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [userDisplayName, setUserDisplayName] = useState<string | null>(null);

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
    const userHash = Cookies.get("userHash");

    if (userHash) {
      fetch(
        `https://dbd-rest-api.eremenko.top/wp-json/api/v2/authorization?hash=${userHash}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.response && data.response["user-twitch-all-data"]) {
            const { user_name } = data.response["user-twitch-all-data"];

            if (user_name && user_name.toLowerCase() !== "empty") {
              setUserDisplayName(user_name);
            } else {
              const { login } = data.response["user-twitch-all-data"];
              setUserDisplayName(login || "Аккаунт");
            }

            setUserLoggedIn(true);
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("userHash");
    setUserLoggedIn(false);
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
        {userLoggedIn ? (
          <>
            <Link to="account" className="button">
              {userDisplayName || "Аккаунт"}
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
            <LoginForm onClose={closeForm} setIsLoggedIn={setUserLoggedIn} />
          )}
          {showRegistrationForm && (
            <RegistrationForm
              onClose={closeForm}
              setIsLoggedIn={setUserLoggedIn}
            />
          )}
        </Overlay>
      )}
    </nav>
  );
};

export default Navigation;
