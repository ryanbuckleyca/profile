import React from "react"
import "./clients.css"
import data from "./data.json"

const clientList = data.artists

export default function clients() {
  return(
    <div id="artist-list">
      <h2>Photographers/Artists:</h2>
      {
        clientList.map(client =>
          <div><a href={client.href}><img alt="avatar card" src={'clients/' + client.avatar} />{client.name}</a></div>
        )
      }
    </div>
  )
}
