import React from "react";
import "./Header.css";
import { Fade } from "../Reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { style } from "../../styles";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "/home";

  function changeTheme() {
    props.setTheme(theme.name === "light" ? "dark" : "light");
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to={link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="homei"
                to="/home"

                style={({ isActive }) => ({
                  borderRadius: 5,
                  color: theme.text,
                  fontWeight: isActive ? "bold" : undefined,
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects"
                to="/projects"

                style={({ isActive }) => ({
                  borderRadius: 5,
                  color: theme.text,
                  fontWeight: isActive ? "bold" : undefined,
                })}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/education"

                style={({ isActive }) => ({
                  borderRadius: 5,
                  color: theme.text,
                  fontWeight: isActive ? "bold" : undefined,
                })}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experience"

                style={({ isActive }) => ({
                  borderRadius: 5,
                  color: theme.text,
                  fontWeight: isActive ? "bold" : undefined,
                })}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contact"

                style={({ isActive }) => ({
                  borderRadius: 5,
                  color: theme.text,
                  fontWeight: isActive ? "bold" : undefined,
                })}
              >
                Contact
              </NavLink>
            </li>
            <button
              aria-label="Toggle color theme"
              type="button"
              {...styles}
              onClick={changeTheme}
            >
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
