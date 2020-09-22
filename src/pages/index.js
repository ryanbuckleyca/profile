import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout";
import Menu from "../components/menu";
import Header from "../components/header";
import Projects from "../components/projects";
import Clients from "../components/clients";
import Organizations from "../components/organizations";

export default function Home() {
  return <Layout>
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
        <Menu />
        <div className="entry-content">
          <a className="anchor" name="clients" href="#">&nbsp;</a>
          <h1>clients</h1>
          <Organizations />
          <Clients />
        </div>
        <div className="entry-content">
          <a className="anchor" name="apps" href="#">&nbsp;</a>
          <h1>applications</h1>
          <Projects />
        </div>
        <div className="entry-content">
          <a className="anchor" name="contact" href="#">&nbsp;</a>
          <h1>contact</h1>
          For now, the best way to reach me is through one of the following:
          <h2 className="contact-icons">
              <a href="https://www.linkedin.com/in/ryanbuckleyca/" aria-label="linkedIn"><img src={'/images/socialicons_01.png'} alt="LinkedIn icon" /></a>
              <a href="https://www.instagram.com/apinrise/"aria-label="instagram"><img src={'images/socialicons_03.png'} alt="Instagram icon" /></a>
              <a href="https://facebook.com/ryanbuckleyca"aria-label="facebook"><img src={'images/socialicons_04.png'} alt="Facebook icon" /></a>
          </h2>
        </div>
      </main>
    </div>
    <footer>
      <div>&copy; copyright 2019, all rights reserved</div>
    </footer>
  </Layout>
}
