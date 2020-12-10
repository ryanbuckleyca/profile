import React from "react"
import "./clients.css"

export default function clients(props) {
  return (
    <div id="artist-list">
      <h2>Photographers/Artists:</h2>
      { props.data.map(
          client =>
          <div>
            <a href={client.href}>
              <img 
                alt="avatar card" 
                src={'clients/' + client.avatar} 
              />
              {client.name}
            </a>
          </div>
      )}
    </div>
  )
}
