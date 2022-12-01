import React from "react";
import html from "../image/html5.png";
import css from "../image/css3.png";
import js from "../image/javascript.png";
import bootstrap from "../image/bootstrap.png";
import git from "../image/git.png";
import react from "../image/react.png";

export default function About() {
    return (
      <div className="container my-4 p-4">
        <section id="about">
          <div className="row">
            <div className="col-md-6 mt-4" data-aos="fade-right">
              <h1 className="heading">About Me.</h1>
              <h2>Hello! I am Fatima Oluwalogbon</h2>
              <p>
                I'm a self taught Frontend developer. I specialize in building
                responsive user interface of the web and creating accesible user
                experience.
              </p>
              <p>
                I am a brilliant and enthusiastic developer with excellent
                skills in my field.
              </p>
              <p>
                I gain pleasure in developing clear and reusable code using
                frontend frameworks to create and maintain the client-side of a
                website
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5  mb-4 mt-4" data-aos="fade-left">
              <h1 className="heading">My Skills.</h1>
              <div className="skills-image">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={bootstrap} alt="" />
                <img src={react} alt="" />
                <img src={git} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
