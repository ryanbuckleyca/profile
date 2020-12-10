import React, {Component} from "react"
import "./menu.css"


class Menu extends Component {
  render() {
    return (
      <nav id="menu">
        <a onClick={() => props.scroll({ 
          ref: props.ref.clients, x: 0, y: 0 
        })}>
          <img src="images/heart.png" className="icon heart" alt="clients" />
          clients
        </a>
        <a onClick={() => props.scroll({ 
          ref: props.ref.apps, x: 0, y: 0 
        })}>
          <img src="images/tool.png" className="icon rocket" alt="apps" />
          { this.props.windowWidth < 475 ? "apps" : "applications" }
        </a>
        <a onClick={() => props.scroll({ 
          ref: props.ref.contact, x: 0, y: 0 
        })}>
          <img src="images/send.png" className="icon wave" alt="contact" />
          contact
        </a>
      </nav>
    )
  }
}
export default Menu;
