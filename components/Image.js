import "./Image.css";
import React from 'react';
import IntroImg from "../assests/new25.jpg";
import { Link } from "react-router-dom";


const Image = () => {
  return <div className="hero">
    <div className="mask">
      <img className="bg-img" src={IntroImg} alt="IntroImg"/>
  </div>
  <div className="content">
    <p>HI, I'M A Developer</p>
    <h1>React Developer</h1>
    <div>
      <Link to="/project" className="btn">projects</Link>
      <Link to="/contact" className="btn btn-light">contact</Link>
    
    
        
    </div>

  </div>
  
  </div>
};

export default Image