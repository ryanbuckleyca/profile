import React, {Component} from "react"
import { Helmet } from 'react-helmet'
import { ScrollTo, ScrollArea } from "react-scroll-to";
import "../components/index.css";
import Menu from "../components/menu";
import Header from "../components/header";
import Projects from "../components/projects";
import Clients from "../components/clients";
import Organizations from "../components/organizations";
import data from "../components/data.json"


class Home extends Component {

  state = {windowWidth: null};

  refs = {
    clients: React.createRef(),
    apps: React.createRef(),
    contact: React.createRef()
  }

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
          <ScrollTo>
            <Menu 
              windowWidth={this.state.windowWidth} 
              scroll={{scroll}}
              refs={this.refs}
            />
          </ScrollTo>
          <section className="entry-content" id="clients" ref={this.refs.clients}>
            <h1>clients</h1>
            <Organizations data={data.orgs} />
            <Clients data={data.artists} />
          </section>
          <section className="entry-content" id="apps" ref={this.refs.apps}>
            <h1>applications</h1>
            <Projects data={data.projects} />
          </section>
          <section className="entry-content" id="contact" ref={this.refs.conact}>
            <h1>contact</h1>
            For now, the best way to reach me is through one of the following:
            <h2 className="contact-icons">
              <a href="http://linkedin.com/in/ryanbuckleyca/" aria-label="linked in"><img src={'/images/social_linkedin.png'} alt="LinkedIn icon" /></a>
              <a href="http://github.com/ryanbuckleyca" aria-label="git hub"><img src={'images/social_github.png'} alt="GitHub icon" /></a>
              <a href="http://instagram.com/apinrise/" aria-label="instagram"><img src={'images/social_ig.png'} alt="Instagram icon" /></a>
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
