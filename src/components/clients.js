import React from "react"
import "./clients.css"

const clientList = [
  {
    name: 'Susan Meiselas',
    href: 'http://www.susanmeiselas.com/',
    avatar: 'mes.jpg',
  },
  {
    href: 'https://www.imogencunningham.com/',
    avatar: 'cui.jpg',
    name: 'Imogen Cunningham'
  },
  {
    href: 'https://www.elliotterwitt.com/',
    avatar: 'ere.jpg',
    name: 'Elliott Erwitt'
  },
  {
    href: 'https://www.magnumphotos.com/photographer/paul-fusco/',
    avatar: 'fup.jpg',
    name: 'Paul Fusco'
  },
  {
    href: 'http://www.ytobarrada.com/',
    avatar: 'yto.jpg',
    name: 'Yto Barrada'
  },
  {
    href: 'https://wendyewald.com/',
    avatar: 'eww.jpg',
    name: 'Wendy Ewald'
  },
  {
    href: 'http://robertburley.com/',
    avatar: 'bur.jpg',
    name: 'Robert Burley'
  },
  {
    href: 'https://www.abigailheyman.com/',
    avatar: 'hea.jpg',
    name: 'Abigail Heyman'
  },
  {
    href: 'http://meghannriepenhoff.com/',
    avatar: 'rim.jpg',
    name: 'Meghann Riepenhoff'
  },
  {
    href: 'https://www.legacy.com/obituaries/nytimes/obituary.aspx?n=dorothy-m-beskind&pid=173026644',
    avatar: 'bed.jpg',
    name: 'Dorothy Beskind'
  },
  {
    href: 'https://www.henrygrossman.com/',
    avatar: 'grh.jpg',
    name: 'Henry Grossman'
  },
  {
    href: 'https://www.kenheyman.com/index',
    avatar: 'hek.jpg',
    name: 'Ken Heyman'
  }
]

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
