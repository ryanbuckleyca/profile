import React from "react"
import "./header.css"
import Social from "./social"

export default function header() {
  return (
  <header>
    <img className="profile" src={'images/square-me.jpg'} alt="profile" />
    <div className="speech">
      <p>
        Hey, I'm Ryan. I develop digital solutions for artists and archives in the photography community. I create websites, databases, and catalogs to help showcase, preserve, and manage visual assets.
      </p>
      <span id="social">
        <Social />
      </span>
    </div>
  </header>
  )
}
