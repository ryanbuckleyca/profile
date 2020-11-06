import React, {Component} from "react"
import "./menu.css"

class Menu extends Component {
  render(){
    return (
      <div id="menu">
        <a href="#clients">
          <img src="images/heart.png" className="icon heart" alt="clients" />
          clients
        </a>
        <a href="#apps"><img src="images/tool.png" className="icon rocket" alt="apps" />
          { this.props.windowWidth < 475 ? "apps" : "applications" }
        </a>
        <a href="#contact">
          <img src="images/send.png" className="icon wave" alt="contact" />
          contact
        </a>
      </div>
    )
  }
}
export default Menu;
