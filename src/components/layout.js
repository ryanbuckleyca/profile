import React from "react"
import { Helmet } from 'react-helmet'
import "./layout.css"

export default function Layout({ children }) {
  return <>
    <Helmet>
      <title>Ryan Buckley • Web Developer and Photo Archives Specialist</title>
      <meta property="og:url" content="//ryanbuckley.ca" />
      <meta property="og:type" content="" />
      <meta property="og:title" content="Ryan Buckley" />
      <meta property="og:description" content="Web Developer and Photo Archives Specialist" />
      <meta property="og:image" content="//ryanbuckley.ca/images/screenshot.png" />
    </Helmet>
    {children}
  </>
}