import React, { useState, useEffect } from "react";
import "./navbar.css";

import { ThemeContext, LangContext } from "../../utils/context";
import { useContext } from "react";

import { Link } from "react-router-dom";

const NavBar = ({ active }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, traduce } = useContext(LangContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className={open ? "open" : ""}>
      <div className="logo">
        Jonathan.L
        <br />
        WebDev
      </div>
      <div className="navContent">
        <ul>
          <li className={active === "home" ? "active" : ""}>
            <Link to="/">&nbsp;{lang === "en" ? "Home" : "Accueil"}&nbsp;</Link>
          </li>
          <li className={active === "resume" ? "active" : ""}>
            <Link to={"/resume"}>
              &nbsp; {lang === "en" ? "Resume" : "CV"} &nbsp;
            </Link>
          </li>
          <li className={active === "project" ? "active" : ""}>
            <Link to={"/project"}>
              &nbsp; {lang === "en" ? "Projects" : "Projets"} &nbsp;
            </Link>
          </li>
          <li className={active === "contact" ? "active" : ""}>
            <Link to="/contact">&nbsp;Contact&nbsp;</Link>
          </li>
        </ul>
        <div className="switchContainer">
          <label htmlFor="traduce" className="supprDisplay">
            Change lang to {lang === "en" ? "english" : "french"}
            {lang === "en" ? "Traduire en Français" : "Traduce in English"}
          </label>
          <label className="switch lang" htmlFor="traduce">
            <input
              type="checkbox"
              id="traduce"
              onChange={(e) => {
                e.target.checked ? traduce("fr") : traduce("en");
              }}
              checked={lang === "fr" ? true : false}
            />
            <span></span>
          </label>
          <label htmlFor="changeTheme" className="supprDisplay">
            Change theme to {theme === "day" ? "day" : "night"}
          </label>
          <label className="switch light" htmlFor="changeTheme">
            <input
              type="checkbox"
              id="changeTheme"
              onChange={(e) => {
                e.target.checked ? setTheme("day") : setTheme("dark");
              }}
              checked={theme === "day" ? true : false}
            />
            <span></span>
          </label>
        </div>
      </div>
      <button onClick={() => setOpen(!open)}>{!open ? "𓃑" : "X"}</button>
    </nav>
  );
};

export default NavBar;
