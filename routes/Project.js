import React from 'react'

import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Heroimg from '../components/Heroimg';


import Price from '../components/Price';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg heading = "PROJECTS" text = "Some of my most recent works" />
      <Work />
      <Price />
      <Footer />
    </div>
  )
}

export default Project