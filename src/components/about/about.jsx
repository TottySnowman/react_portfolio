import React from 'react'
import './about.css'
//import Me_Front from '../../assets/Pictures/paul-wortmann.jpeg'
import {FaAward} from 'react-icons/fa'
import Me_Front from '../../assets/Fingerprint.png'

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
  return(
    <section ref={innerRef} className='hidden' id="about">
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
            <h5>C# Development</h5>
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
};