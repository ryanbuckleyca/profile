import React, {Component} from "react"
import "./menu.css"

class Menu extends Component {
  render() {
    return (
      <nav id="menu">
        <a onClick={() => this.props.scrollTo('#clients')}>
          <img src="images/heart.png" className="icon heart" alt="clients" />
          clients
        </a>
        <a onClick={() => this.props.scrollTo('#apps')}>
          <img src="images/tool.png" className="icon rocket" alt="apps" />
          { this.props.windowWidth < 475 ? "apps" : "applications" }
        </a>
        <a onClick={() => this.props.scrollTo('#contact')}>
          <img src="images/send.png" className="icon wave" alt="contact" />
          contact
        </a>
      </nav>
    )
  }
}
export default Menu;
