import React from 'react'
import './portfolio.css'
import FS_Blumer from '../../assets/Pictures/Logo_FS_Blumer.png'

const portfolio = () => {
  const project_data = [{
    id: 1,
    logo: FS_Blumer,
    title: 'Fahrschule Blumer',
    github: '',
    demo: ''
  }]

  return (
    <section id="portfolio" className="hidden">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        project_data.map(({ id, logo, title, github, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src = {logo} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default portfolio