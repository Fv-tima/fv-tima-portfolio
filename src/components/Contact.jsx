import React from "react";
export default function Contact() {
  return (
    <section id="contacts" className="container my-3" data-aos="fade-up">
      <h1 className="heading mt-3">Contact Me.</h1>
      <div className="contact-info">
        <p>
          I am interested in job opportunities, from internship, freelancing,
          part-time to full-time. Kindly reach out to me through the following
          contact;
        </p>
        <a className="btn2" href="mailto:zahraoluwalogbon@gmail.com">
          Send an Email <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
        <ul className="social-info">
          <li>
            <a href="tel:+2348066952753">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Fv-tima">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fatima-oluwalogbon-287b35242">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Zvhra2">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/teemah247/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
