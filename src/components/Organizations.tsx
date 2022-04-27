import React from "react"
import "./organizations.css"

const Organizations = ({data}) => (
  <div id="org-list">
    <h2>Organizations/Institutions:</h2>
    {
      data.map(org =>
        <a href={org.href}>
          <img alt={org.alt} src={'logos/' + org.logo} />
        </a>
      )
    }
  </div>
)

export default Organizations
