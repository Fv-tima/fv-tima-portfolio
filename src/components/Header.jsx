import React from "react";
import logo from "../image/logo.png";
import resume from "../image/resume.pdf";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header(props) {
  let darkIcon = props.darkMode ? (
    <i className="fs-1 fa-solid fa-moon"></i>
  ) : (
    <i className="fs-1 fa-solid fa-sun"></i>
  );
  return (
    <nav>
      <Navbar expand="lg" fixed="top" className={props.darkMode ? "dark" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#about" className="text-center">
                About
              </Nav.Link>
              <Nav.Link href="#projects" className="text-center">
                Projects
              </Nav.Link>
              <Nav.Link href="#contacts" className="text-center">
                Contacts
              </Nav.Link>
            </Nav>
            <Nav.Link download href={resume} className="text-center">
              <button>CV/Resume</button>
            </Nav.Link>
            <Nav.Link className=" text-center" onClick={props.toggle}>
              {darkIcon}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
