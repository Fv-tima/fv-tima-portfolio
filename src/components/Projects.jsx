import React from "react";
import cypto from "../image/cypto (2).png";
import fylo from "../image/fylo.png";
import smart from "../image/smart.png";
import movie from "../image/movie.png";
import gitP from "../image/git profile.png";
import todo from "../image/todos.png"


export default function Project() {
  const projects = [
    {
      img: cypto,
      title: "Cypto crypto landing page",
      description:
        "A crypto currency projects i built on a twitter monthly challenge Using Html, Css, Javascript, Bootstrap and AOS",
      live: "https://crappo-cypto-fv-tima.netlify.app/",
      github: "https://github.com/Fv-tima/crappo",
    },
    {
      img: fylo,
      title: "Fylo Landing Page",
      description: "A frontend challenge built using Html and css",
      live: "https://fv-tima-fylo.netlify.app/",
      github: "https://github.com/Fv-tima/Fylo",
    },
    {
      img: smart,
      title: "Smart watch website",
      description: "A smart watch built using Html, Css and Bootstrap",
      live: "https://smart-watch-by-zvhra.netlify.app/",
      github: "https://github.com/Fv-tima/smart-watch-built-bootstrap",
    },
    {
      img: movie,
      title: "Movie-appy",
      description:
        "A movie app with a search filter built using Html, Css and Javascript",
      live: "https://movieappy.netlify.app/",
      github: "https://github.com/Fv-tima/movie-app",
    },
    {
      img: gitP,
      title: "Github profile finder",
      description:
        "A github profile finder built using html,css and javascript",
      live: "https://my-github-profile-finder.netlify.app/",
      github: "https://github.com/Fv-tima/github-profile-finder",
    },
    {
      img: todo,
      title: "Todos app",
      description:
        "A todo app built using react js with a delete and completed feature",
      live: "https://fv-tima.github.io/todos-app/",
      github: "https://github.com/Fv-tima/todos-app",
    },
  ];

  const projectEl = projects.map((project) => (
    <div key={project.img} className="project-info">
      <img className="project-image" src={project.img} alt="" />
      <p className="project-des text-center">{project.description}</p>
      <div className="project-txts">
        <h1 className="project-title">{project.title}</h1>
        <div className="link">
          <a href={project.live} className="live">
            <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
          <a href={project.github} className="github">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  ));
  
  return (
    <section id="projects" className="container my-4 p-4" data-aos="fade-up">
      <h1 className="heading mt-3">My Projects.</h1>
      <div className="projects" >
        {projectEl}
      </div>
    </section>
  );
}

