import React from "react";
import logo from "../images/logo.svg";

const Header = ({ score }) => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="score">
        <span>Score</span>
        <span>{score}</span>
      </div>
    </header>
  );
};

export default Header;
