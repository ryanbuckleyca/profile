import React from "react"
import "./clients.css"

const Clients = ({ data }) => (
  <div id="artist-list">
    <h2>Photographers/Artists:</h2>
    { 
      data.map((client) => (
        <div>
          <a href={client.href}>
            <img 
              alt="avatar card" 
              src={'clients/' + client.avatar} 
            />
            {client.name}
          </a>
        </div>
      ))
    }
  </div>
)

export default Clients
