import React from 'react'

import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Form from '../components/Form'
import Footer from '../components/Footer';



const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg  heading = "CONTACT ME" text = "Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact