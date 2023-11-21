import React from "react";
import "./footer.css";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo" rel="noreferrer">
        <AiOutlineRocket size={50} />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#" rel="noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="#about" rel="noreferrer">
            About
          </a>
        </li>
        <li>
          <a href="#experience" rel="noreferrer">
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" rel="noreferrer">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
        </li>
        <li>
          <a>Hello World</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/paul-philippe-wortmann/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/gez_wat" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a
          href="https://github.com/TottySnowman"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Paul-Philippe Wortmann. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
