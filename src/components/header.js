import React from "react"
import "./header.css"

export default function header() {
  return (
  <header>
    <img className="profile" src={'images/square-me.jpg'} alt="profile" />
    <div className="speech">
      <p>Hey, I'm Ryan. I develop digital solutions for artists and archives in the photography community. I create websites, databases, and catalogs to help showcase, preserve, and manage visual assets.</p>
      <span id="social">
          <a href="https://www.linkedin.com/in/ryanbuckleyca/"><img src={'/images/social_linkedin.png'} alt="LinkedIn icon" /></a>
          <a href="https://github.com/ryanbuckleyca/"><img src={'images/social_github.png'} alt="GitHub icon" /></a>
          <a href="https://www.instagram.com/apinrise/"><img src={'images/social_ig.png'} alt="Instagram icon" /></a>
      </span>
    </div>
  </header>
  )
}
