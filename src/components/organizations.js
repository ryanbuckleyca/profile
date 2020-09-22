import React from "react"
import "./organizations.css"
import data from "./data.json"

const orgList = data.orgs

export default function organizations() {
  return(
    <div id="org-list">
      <h2>Organizations/Institutions:</h2>
      {
        orgList.map(org =>
          <a href={org.href}><img alt={org.alt} src={'logos/' + org.logo} /></a>
        )
      }
    </div>
  )
}
