import React from 'react'
import './header.css'
import CV from './CV'
import main_pic from '../../assets/Pictures/paul-wortmann.jpeg'
import Socials from './socials'
import fingerprint from  '../../assets/Fingerprint.png'

const header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Paul-Philippe Wortmann</h1>
            <h5 className='text-light'>Junoir Application Developer</h5>
            <CV/>
            <Socials/>
            <div className="main_picture">
        <img src={fingerprint} alt="main" />
        
    </div>
        </div>
    </header>
  )
}

export default header