import React, { useState } from "react";
import "./css/Navbar.css";

export default function Navbar() {
  const [clicked, clicker] = useState(false);

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  return (
    <div className="header" id="header">
      <img
        src={process.env.PUBLIC_URL + "/images/logo-white.png"}
        alt="logo-word"
        className="logo-word"
      ></img>

      <div className={clicked ? "navbar drop" : "navbar colapse"}>
        <a className="nav-element" href="#header">
          Home{" "}
        </a>
        <a className="nav-element" href="#footer">
          Contact
        </a>
      </div>
      <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  );
}
