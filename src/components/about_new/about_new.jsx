import React from "react";
import "./about_new.css";
//import Me_Front from '../../assets/Pictures/paul-wortmann.jpeg'
import { FaAward } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { SiSap } from "react-icons/si";
import Me_Front from "../../assets/Pictures/paul_wortmann_portrait.jpeg";

/* const about = () => {
  return (
    <section id="about" className="hidden">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-picture">
            <img src={Me_Front} alt=''></img>
          </div>
        </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3 Years</small>

          </article>

          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3 Years</small>

          </article>

          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3 Years</small>

          </article>


        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis similique a voluptatibus, ipsum commodi voluptatem hic aperiam praesentium necessitatibus odit! Assumenda officia, illo neque minus sequi nostrum! Voluptatibus, dolores molestias?
          </p>
      </div>
      </div>
    </section>
  )
} */

export default function about({ innerRef }) {
  return (
    <section ref={innerRef} className="hidden" id="about">
      <div className="testCenter">
        <div class="cardGroup">
          <div class="card"></div>

          <div class="card"></div>

          <div class="card"></div>

          <div class="card"></div>
        </div>
      </div>

      <h5>Get to know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-picture">
            <img src={Me_Front} alt=""></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>C# & ASP.NET Development</h5>
              <small>3 Years</small>
            </article>

            <article className="about__card">
              <SiSap className="about__icon" />
              <h5>ABAP & SAP Fiori Development</h5>
              <small>2.5 Years</small>
            </article>

            <article className="about__card">
              <IoIosDocument className="about__icon" />
              <h5>Solidity & Smart Contracts</h5>
              <small>1 Year</small>
            </article>
          </div>
          <p>
            My name is Paul-Philippe Wortmann. I am currently working at Bell
            Food Group as a Junior Application Developer and I am also the
            practice educator for C#. Before I explored the world of coding I
            finished my apprenticeship as a Food technologist at Ricola.
          </p>
          <p>
            In my free time I like to go to the gym to maintain my physical
            shape, but I also like to learn about new technologies mostly about
            blockchain or new frameworks. But I also really enjoy reading books
            and spending quality time with the family.
          </p>
        </div>
      </div>
    </section>
  );
}
