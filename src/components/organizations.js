import React from "react"
import "./organizations.css"

const orgList = [
  {
    href: 'http://www.magnumphotos.com',
    alt: 'Magnum Photos logo',
    logo: 'magnum.jpeg'
  },
  {
    href: 'http://www.icp.org',
    alt: 'ICP logo',
    logo: 'icp.png'
  },
  {
    href: 'http://www.apag.us',
    alt: 'APAG logo',
    logo: 'apag.png'
  },
  {
    href: 'http://www.buddhist-archive.org',
    alt: 'BAP logo',
    logo: 'bap.png'
  },
  {
    href: 'http://www.be-hold.com',
    alt: 'Be-hold logo',
    logo: 'behold.png'
  },
  {
    href: 'http://www.archiveofmodernconflict.com/',
    alt: 'AMC logo',
    logo: 'amc.png'
  },
  {
    href: 'http://www.interferencearchive.org',
    alt: 'IA logo',
    logo: 'ia.png'
  },
  {
    href: 'http://www.ryersonimagecentre.ca',
    alt: 'RIC logo',
    logo: 'ric.png'
  },
  {
    href: 'http://www.eastman.org/',
    alt: 'GEM logo',
    logo: 'gem.jpeg'
  },
  {
    href: 'http://www.pictouphotos.ca/',
    alt: 'PHPS logo',
    logo: 'phps.png'
  },
  {
    href: 'http://www.magnunfoundation.org',
    alt: 'MF logo',
    logo: 'mf.png' 
  }
]

export default function organizations() {
  return(
    <div id="org-list">
    {
      orgList.map(org =>
        <a href={org.href}><img alt={org.alt} src={'logos/' + org.logo} /></a>
      )
    }
    </div>
  )
}
