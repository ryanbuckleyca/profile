import React from "react"
import "./projects.css"

const projectList = [
  {
    href: 'http://www.commonscloud.cc/',
    img: 'commonscloud.png',
    type: 'Community network',
    icons: ['ruby.png', 'rails.png', 'js.png'],
    desc: 'CommonsCloud.cc is a community mutual aid app build with Ruby on Rails.'
  },
  {
    href: 'http://freewheelnow.herokuapp.com/',
    img: 'freewheel.png',
    type: 'Online marketplace',
    icons: ['ruby.png', 'rails.png', 'js.png'],
    desc: 'I helped as a lead developer to build an online marketplace in Ruby on Rails to rent and lease interesting and high-end bikes by the hour, day, or week.'
  },
  {
    href: 'http://311.rocks/',
    img: 'grocery-list.png',
    type: 'Mobile design',
    icons: ['reef.png', 'js.png', 'node.png'],
    desc: 'Web-based cross-platform apps like GroceryList, an application for roomates to share the task of shopping, built in Express.js and a light-weight React alternative "Reef.js".'
  },
  {
    href: 'http://www.magnumconsortium.net/',
    img: 'magnumconsortium.png',
    type: 'Drupal development',
    icons: ['drupal.png'],
    desc: 'I have experience with Drupal, like the MagnumConsortium pilot project demonstrating an online consortium relating collecting instutions around the world.'
  },
  {
    href: '#',
    img: 'filemaker.png',
    type: 'Filemaker databases',
    icons: ['fmp.png'],
    desc: 'For the past several years I\'ve built dozens of custom Filemaker databases for artists looking for low-cost, DIY archiving tools.'
  },
  {
    href: 'http://www.be-hold.com/',
    img: 'be-hold.png',
    type: 'Wordpress',
    icons: ['wp.png'],
    desc: 'I\'ve constructed headless Wordpress CMS for ease of back-end editing with custom-integrated phpList for low-cost newsletter distribution.'
  },
  {
    href: 'http://www.ryanbuckley.ca/findingaid/chusseau-flaviens.xml',
    img: 'chusseau-flaviens.png',
    type: 'EAD finding aids',
    icons: ['xml.png', 'json.png'],
    desc: 'I can build an XML/EAD finding aid like this one I made for George Eastman Museum using XSLT and Flickr API to enhance traditional static museum research tools.'
  },
  {
    href: 'http://www.abigailheyman.com',
    img: 'heymanwebsite.png',
    type: 'Squarespace',
    icons: ['css.png', 'squarespace.png'],
    desc: 'I have experience setting up quick plug-and-play squarespace sites with themed layouts and custom css.'
  }
]

export default function projects() {
  return (
    <div id='app-list' className='row'>
    {
      projectList.map(project =>
      <a href={project.href} title=''>
        <div className='card-img' style={{backgroundImage: `url('apps/${project.img}')`}}></div>
        <div className='card-title' style={{backgroundImage: `url('images/wave${Math.floor(Math.random()*5)+1}.svg')`}}>
          <span>{project.type}</span>
          <div className="icons">
            {project.icons.map(icon => <img src={'icons/' + icon} className='icon' />)}
          </div>
        </div>
        <div className='card-body'>
          {project.desc}
        </div>
      </a>)
    }
    </div>
  )
}