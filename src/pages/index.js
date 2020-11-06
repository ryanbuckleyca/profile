import React, {Component} from "react"
import { Helmet } from 'react-helmet'
import "../components/index.css";
import Menu from "../components/menu";
import Header from "../components/header";
import Projects from "../components/projects";
import Clients from "../components/clients";
import Organizations from "../components/organizations";
import data from "../components/data.json"

class Home extends Component {

  constructor() {
    super()
    this.state = {windowWidth: null};
  }

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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
        <div id="top-section">&nbsp;</div>
        <main id="content">
          <Header />
          <Menu windowWidth={this.state.windowWidth} />
          <div className="entry-content">
            <a className="anchor" name="clients" href="#">&nbsp;</a>
            <h1>clients</h1>
            <Organizations data={data.orgs} />
            <Clients data={data.artists} />
          </div>
          <div className="entry-content">
            <a className="anchor" name="apps" href="#">&nbsp;</a>
            <h1>applications</h1>
            <Projects data={data.projects} />
          </div>
          <div className="entry-content">
            <a className="anchor" name="contact" href="#">&nbsp;</a>
            <h1>contact</h1>
            For now, the best way to reach me is through one of the following:
            <h2 className="contact-icons">
                <a href="http://linkedin.com/in/ryanbuckleyca/" aria-label="linked in"><img src={'/images/social_linkedin.png'} alt="LinkedIn icon" /></a>
                <a href="http://instagram.com/apinrise/" aria-label="instagram"><img src={'images/social_ig.png'} alt="Instagram icon" /></a>
                <a href="http://facebook.com/ryanbuckleyca" aria-label="facebook"><img src={'images/social_fb.png'} alt="Facebook icon" /></a>
                <a href="http://github.com/ryanbuckleyca" aria-label="git hub"><img src={'images/social_github.png'} alt="GitHub icon" /></a>

            </h2>
          </div>
        </main>
      </div>
      <footer>
        <div>&copy; copyright 2019, all rights reserved</div>
      </footer>
    </>
  }
}

export default Home;
