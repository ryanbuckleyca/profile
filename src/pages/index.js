import React, {Component} from "react"
import { Helmet } from 'react-helmet'
import "../components/index.css";
import scrollTo from 'gatsby-plugin-smoothscroll';
import Menu from "../components/menu";
import Header from "../components/header";
import Social from "../components/social";
import Projects from "../components/projects";
import Clients from "../components/clients";
import Organizations from "../components/organizations";
import data from "../components/data.json"


class Home extends Component {

  state = { windowWidth: null };

  updateDimensions = () => {
    this.setState({ 
      windowWidth: window.innerWidth 
    });
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener(
      'resize', 
      this.updateDimensions
    );
  }
  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    return <>
      <Helmet>
        <title>Ryan Buckley • Web Developer and Photo Archives Specialist</title>
        <meta property="og:url" content="//ryanbuckley.ca" />
        <meta property="og:type" content="" />
        <meta property="og:title" content="Ryan Buckley" />
        <meta property="og:description" content="Web Developer and Photo Archives Specialist" />
        <meta property="og:image" content="//ryanbuckley.ca/images/screenshot.png" />
      </Helmet>
      <div id="container">
        <span id="top-section">&nbsp;</span>
        <main id="content">
          <Header />
          <Menu 
            scrollTo={scrollTo}
            windowWidth={this.state.windowWidth} 
          />  
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
              <Social />
            </h2>
          </section>
        </main>
      </div>
      <footer>
        &copy; copyright 2019, all rights reserved
      </footer>
    </>
  }
}

export default Home;
