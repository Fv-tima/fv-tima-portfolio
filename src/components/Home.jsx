import React from 'react'
import resume from '../image/resume.pdf'

export default function Home() {
  return (
    <div className="container px-4" data-aos="fade-up">
      <section id="home">
        <h1>
          Hi<span>!</span>,
          <br />
          I'm Fa
          <span>tima,</span>
          <br />a web developer
        </h1>
        <h2>Frontend Developer/Javascript Developer</h2>
        <a download href={resume}>
          <button>CV/Resume</button>
        </a>
      </section>
    </div>
  );
}
