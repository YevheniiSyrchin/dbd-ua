import React, { FC } from "react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <nav className="navContainer">
      <ul className="navigation">
        <li>
          <Link to="/dbd-ua/" className="button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dbd-ua/news" className="button">
            Новини
          </Link>
        </li>
        <li>
          <Link to="/dbd-ua/roulette" className="button">
            Рулетка
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
