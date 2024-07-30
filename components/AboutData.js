import "./AboutDStyle.css";

import React from 'react'
import { Link } from "react-router-dom";
import abpic from "../assests/new30.webp";
import abpic1 from "../assests/new31.webp";

const AboutData = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>WHO AM I</h1>
        <p>I am web developer.I create responsive secure websites formy client</p>
        <Link to = "/contact">
        <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={abpic} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={abpic1} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
            
    
  )
}

export default AboutData