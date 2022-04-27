import React from "react"
import { FaGithubAlt, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import "./header.css"

const Socials = () => (
  <div className="icons">
    <a href="https://www.linkedin.com/in/ryanbuckleyca/"
        style={{ backgroundColor: '#0072b1', color: 'white', fontSize: '24px' }}>
      <FaLinkedinIn />
    </a>
    <a href="https://github.com/ryanbuckleyca/"
        style={{ color: 'black' }}>
      <FaGithubAlt />
    </a>
    <a href="https://www.instagram.com/apinrise/"
        style={{ color: 'white', background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' }}>
      <FaInstagram />
    </a>
  </div>
)

export default Socials
