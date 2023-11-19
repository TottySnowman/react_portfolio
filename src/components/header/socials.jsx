import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/paul-philippe-wortmann-2a3557211/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={25} />
      </a>
      <a
        href="https://github.com/TottySnowman"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub size={25} />
      </a>
      <a href="https://twitter.com/gez_wat" target="_blank" rel="noreferrer">
        <BsTwitter size={25} />
      </a>
    </div>
  );
};

export default socials;