import React from "react";

export default function Footer(props) {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className = {props.darkMode ? "dark" : ""}>
      <p>
        &copy; Copyright {year}
        <br />
        Built with <span>&#x2661;</span> by Fv-tima
      </p>
    </footer>
  );
}
