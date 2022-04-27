import React, { useState, useEffect } from "react";
import "./menu.css"

const Menu = ({ scrollTo }) => {
  const [windowWidth, setWindowWidth] = useState();

  const updateDimensions = (width) => {
    setWindowWidth(width);
  };

  useEffect(() => {
    window.addEventListener(
      'resize', 
      () => updateDimensions(window.innerWidth)
    );
    return window.removeEventListener('resize', updateDimensions);
  }, [])

  return (
    <nav id="menu">
      <a onClick={() => scrollTo('#clients')}>
        <img src="images/heart.png" className="icon heart" alt="clients" />
        clients
      </a>
      <a onClick={() => scrollTo('#apps')}>
        <img src="images/tool.png" className="icon rocket" alt="apps" />
        { windowWidth && windowWidth > 475 ? "applications" : "apps" }
      </a>
      <a onClick={() => scrollTo('#contact')}>
        <img src="images/send.png" className="icon wave" alt="contact" />
        contact
      </a>
    </nav>
  )
}

export default Menu;
