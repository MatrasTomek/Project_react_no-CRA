import React from "react";
import bemCssModules from "bem-css-modules";
import { Link } from "react-router-dom";

import { default as AsideMenuStyles } from "../AsideMenu.module.scss";

const style = bemCssModules(AsideMenuStyles);

const UserMenu = ({ isUserLogged }) => (
  <>
    <p className={style("title")}>Panel użytkownika</p>
    <nav>
      <ul>
        <li className={style("link")}>
          <Link to="/">Strona główna</Link>
        </li>
        {isUserLogged && (
          <li className={style("link")}>
            <Link to="/my-staffy">My staff</Link>
          </li>
        )}
      </ul>
    </nav>
  </>
);

export default UserMenu;
