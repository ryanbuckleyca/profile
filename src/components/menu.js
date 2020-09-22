import React from "react"
import "./menu.css"

export default function menu() {
  return (
    <div id="menu">
      <a href="#clients"><img src="images/heart.png" className="icon heart" /> clients</a>
      <a href="#apps"><img src="images/tool.png" className="icon rocket" /> applications</a>
      <a href="#contact"><img src="images/send.png" className="icon wave" /> contact</a>
    </div>
  )
}