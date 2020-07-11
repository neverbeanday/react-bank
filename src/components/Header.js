import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../themeContext";

export default function Header() {
  const { colorTheme, backgroundTheme, onChangeTheme } = useContext(
    ThemeContext
  );

  return (
    <header
      className="App-header"
      style={{
        backgroundColor: backgroundTheme === "dark" ? "black" : "white",
      }}
    >
      <div className="App-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="App-header-nav">
          <li>
            <NavLink
              exact
              to="/"
              className="App-header-link"
              activeClassName="App-header-link-active"
              style={{ color: colorTheme === "white" ? "white" : "black" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/convertion"
              className="App-header-link"
              activeClassName="App-header-link-active"
              style={{ color: colorTheme === "white" ? "white" : "black" }}
            >
              Convertion
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="App-header-link"
              activeClassName="App-header-link-active"
              style={{ color: colorTheme === "white" ? "white" : "black" }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="App-header-link"
              activeClassName="App-header-link-active"
              style={{ color: colorTheme === "white" ? "white" : "black" }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="App-theme">
        <p style={{ color: colorTheme === "white" ? "white" : "black" }}>
          Themes{" "}
        </p>
        <button
          style={{
            backgroundColor: colorTheme === "white" ? "white" : "black",
          }}
          onClick={onChangeTheme}
        ></button>
      </div>
    </header>
  );
}
