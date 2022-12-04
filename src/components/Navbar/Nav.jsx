import React, { useState } from "react";
import "./Nav.css";
import logo from "/src/image/logo.png"
import resume from "/src/image/resume.pdf"

export default function Nav(props) {
  const [isMobile, setIsMobile] = useState(false);
  let darkIcon = props.darkMode ? (
    <i className="fs-1 fa-solid fa-moon"></i>
  ) : (
    <i className="fs-1 fa-solid fa-sun"></i>
  );
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="" />
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <a href="#about">
          <li>About</li>
        </a>

        <a href="#contacts">
          <li>Contact</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>

        <a download href={resume}>
          <button>CV/Resume</button>
        </a>
        <a href="#" onClick={props.toggle}>
          {darkIcon}
        </a>
      </ul>
      <div className="ham-burger" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fs-1 fa-solid fa-times"></i>
        ) : (
          <i className="fs-1 fa-solid fa-bars"></i>
        )}
      </div>
    </nav>
  );
}
