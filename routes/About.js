import React from 'react'

import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import AboutData from '../components/AboutData';
import Footer from '../components/Footer';




const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg heading = "ABOUT ME" text = "I 'M a Friendly Front-End Developer"/>
      <AboutData />
      <Footer />
    </div>
  )
}

export default About