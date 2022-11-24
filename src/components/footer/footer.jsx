import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Wortmann</a>
    
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><BsFacebook/></a>
        <a href=""><BsTwitter/></a>
        <a href=""><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Paul-Philippe Wortmann. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer