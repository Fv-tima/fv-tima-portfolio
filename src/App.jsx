import React from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";
import {useState} from 'react'
import Nav from "./components/Navbar/Nav.jsx";
export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  function toggle() {
    setDarkMode(prev => !prev)
  }
  return (
    <div className={`wrapper${ darkMode? "dark": "" }`}>
      <Nav toggle={toggle}  />

      <Home />

      <About />

      <Projects />

      <Contact />

      <Footer  />
    </div>
  );
}
