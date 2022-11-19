import React from 'react'
import CV_File from '../../assets/CV.pdf'
const CV = () => {
  return (
    <div className="cv">
        <a href={CV_File} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default CV