import { React, useRef as UseRef } from 'react'
import './contact.css'
import {HiMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const contact = () => {

  const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_wpsm2bf","template_fpcrnc1", form.current, 'SciufEivDG1eED0HZ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact" className="hidden">
      <h5>Get in Touch</h5>
      <h2>Contact Me!</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>paulphilippewortmann@gmail.com</h5>
            <a href="mailto:paulphilippewortmann@gmail.com" target='_blank'>Send me a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+41765618875</h5>
            <a href="https://api.whatsapp.com/send?phone=41765618875" target='_blank'>Send me a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="" placeholder='Your Full name'/>
            <input type="email" name="email" id="" placeholder='Your Email'/>
            <textarea name="message" id="" placeholder='Your Message' rows='7'/>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default contact