import React, {Component} from "react"
import "../components/index.css";
import scrollTo from 'gatsby-plugin-smoothscroll';
import Menu from "../components/Menu";
import Meta from "../components/meta";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Projects from "../components/projects";
import Clients from "../components/clients";
import Organizations from "../components/organizations";
import data from "../components/data.json"

class Home extends Component {
  render() {
    return <>
      <Meta />
      <div id="container">
        <span id="top-section">&nbsp;</span>
        <main id="content">
          <Header />
          <Menu scrollTo={scrollTo} />  
          <section id="clients" className="entry-content">
            <h1>clients</h1>
            <Organizations data={data.orgs} />
            <Clients data={data.artists} />
          </section>
          <section id="apps" className="entry-content">
            <h1>applications</h1>
            <Projects data={data.projects} />
          </section>
          <section id="contact" className="entry-content">
            <h1>contact</h1>
            <h2 className="contact-icons">
              <Socials />
            </h2>
          </section>
        </main>
      </div>
      <footer>
        &copy; copyright {new Date().getFullYear()}, all rights reserved
      </footer>
    </>
  }
}

export default Home;
