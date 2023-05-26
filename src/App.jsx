import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import About_new from './components/about_new/about_new'
import {useEffect} from 'react'



const App = () => {
  useEffect(() =>{
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>{
          if(entry.isIntersecting){
              entry.target.classList.add('show');
          }
      });
  });
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  })
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <About_new/>
    </>
  )
}
export default App