import "./footerstyle.css"
import React from 'react'

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"

function footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>452 Track 06</p>
                        <p>Thambuththegama</p>
                    </div>
                    
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    +94785623655
                    </h4>
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    shashikala@gmail.com
                    </h4>
                </div>

            </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>This is ABC sollution.pvt software company.
                    This is ABC sollution.pvt software company.
                    This is ABC sollution.pvt software company.
                    This is ABC sollution.pvt software company.
                    </p>
                    <div className="social">
                    <FaFacebook size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <FaTwitter size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    </div>
                </div>
            
        </div>
        
        
    </div>
  )
}

export default footer

