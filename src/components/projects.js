import React from "react"
import "./projects.css"

export default function projects(props) {
  return (
    <div id='app-list' className='row'>
    {
      props.data.map((project, i) =>
        <a href={project.href} title=''>
          <div 
            className='card-img' 
            style={{backgroundImage: `url('apps/${project.img}')`}}>
          </div>
          <div
            className='card-title' 
            style={{backgroundImage: `url('images/wave${i%6}.svg')`}}>
            <span>{project.type}</span>
            <div className="icons">
              {project.icons.map(icon => <img src={'icons/' + icon} className='icon' alt={icon} />)}
            </div>
          </div>
          <div className='card-body'>
            {project.desc}
          </div>
        </a>
      )
    }
    </div>
  )
}
