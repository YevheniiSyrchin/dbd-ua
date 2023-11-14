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
    setUserDisplayName(null);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationForm(true);
    setShowLoginForm(false);
    setUserDisplayName(null);
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
            const userNickname =
              data.response["user-twitch-all-data"]["user-nickname"];
            const login = data.response["user-twitch-all-data"]["login"];

            if (userNickname && userNickname.toLowerCase() !== "") {
              setUserDisplayName(userNickname);
            } else if (login) {
              setUserDisplayName(login);
            } else {
              setUserDisplayName("Аккаунт");
            }

            setUserLoggedIn(true);
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [userDisplayName]);

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

            <Link to="/" className="button" onClick={handleLogout}>
              {"Вийти"}
            </Link>
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
