import React from "react";
import "./header.css";
import CV from "./CV";
import main_pic from "../../assets/Pictures/paul_wortmann_main.jpeg";
import Socials from "./socials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Paul-Philippe Wortmann</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CV />
        {/* <Socials /> */}
        <div className="main_picture">
          <img src={main_pic} alt="main" className="" />
        </div>
        {/*         <div className="main_picture">
          <img src={main_pic} alt="main" />
        </div> */}
      </div>
    </header>
  );
};

export default header;
