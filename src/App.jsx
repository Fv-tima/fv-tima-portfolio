import React from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";
import {useState} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  function toggle() {
    setDarkMode(prev => !prev)
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header toggle={toggle} darkMode={darkMode} />

      <Home />

      <About />

      <Projects />

      <Contact />

      <Footer darkMode={darkMode} />
    </div>
  );
}
