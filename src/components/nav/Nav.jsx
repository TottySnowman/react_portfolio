import React, { useState } from "react";
import "./nav.css";
import { FaHome, FaCode } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { GiBookPile } from "react-icons/gi";
import { MdOutlineContactMail } from "react-icons/md";
import ChatButton from "../chatbot/chatButton";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <FaHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <GoPerson />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <GiBookPile />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <FaCode />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdOutlineContactMail />
        </a>
      </nav>
      <div className="floating-right">
        <ChatButton />
      </div>
    </>
  );
};

export default Nav;
