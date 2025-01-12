import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { SiSap } from "react-icons/si";
import Me_Front from "../../assets/Pictures/paul_wortmann_portrait.jpeg";
import Reading from "../../assets/Pictures/hobbies/reading.png";
import Gym from "../../assets/Pictures/hobbies/Gym.png";
import NFT from "../../assets/Pictures/hobbies/NFT_Preview.png";

export default function About({ innerRef }) {
  return (
    <section ref={innerRef} className="hidden" id="about">
      <h5>Get to know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="cardGroup">
          <img src={Gym} alt="Gym" className="card" />
          <img src={Reading} alt="Reading books" className="card" />
          <img src={NFT} alt="NFT" className="card" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>C# & ASP.NET Development</h5>
              <small>5 Years</small>
            </article>

            <article className="about__card">
              <SiSap className="about__icon" />
              <h5>ABAP & SAP Fiori Development</h5>
              <small>3.5 Years</small>
            </article>

            <article className="about__card">
              <IoIosDocument className="about__icon" />
              <h5>Solidity & Smart Contracts</h5>
              <small>1.5 Year</small>
            </article>
          </div>
          <p>
            My name is Paul-Philippe Wortmann. I am currently working at Careanesth AG as Full-Stack Developer. 
            Before I explored the world of coding I
            finished my apprenticeship as a Food technologist at Ricola.
          </p>
          <p>
            In my free time I like to go to the gym to maintain my physical
            shape, but I also like to learn about new technologies mostly about
            new frameworks, AI and new languages. But I also really enjoy reading
            books and spending quality time with the family.
          </p>
        </div>
      </div>
    </section>
  );
}
