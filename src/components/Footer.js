import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <img
        src={process.env.PUBLIC_URL + "/images/logo-White.png"}
        alt="logo"
        className="logo-foot"
      ></img>
      <p>Website Created by Felipe Perarnau</p>
    </div>
  );
}
