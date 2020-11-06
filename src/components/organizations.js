import React from "react"
import "./organizations.css"

export default function organizations(props) {
  return(
    <div id="org-list">
      <h2>Organizations/Institutions:</h2>
      {
        props.data.map(org => {
          <a href={org.href}>
            <img alt={org.alt} src={'logos/' + org.logo} />
          </a>
        })
      }
    </div>
  )
}

