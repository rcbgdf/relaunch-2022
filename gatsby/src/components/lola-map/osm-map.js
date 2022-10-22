import React from "react"
import { getCookieConsentValue } from "react-cookie-consent";
import { StaticImage  } from "gatsby-plugin-image"

import "./osm-map.scss"

const lon0=10.204504430294039
const lat0=53.49484826469885

const lon1=10.206567049026491
const lat1=53.49606890629904

const lat=53.495425879874865
const lon=10.205826759338379

const OsmMap = () => {
  return <>
    <iframe width='100%' height={350} frameborder='0' scrolling='no' marginheight='0' marginwidth='0'
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${lon0},${lat0},${lon1},${lat1}&layer=mapnik&marker=${lat},${lon}`}
      style={{border: '1px', solid: true, black: true}}>
    </iframe>
    <div className='osmMapSuffix'>
      <a href={`https://www.openstreetmap.org/?lat=${lat}&amp;lon=${lon}&amp;zoom=16&amp;layers=M`} target='_blank'>Gr&#246;&#223;ere Karte anzeigen</a>
    </div>
  </>
}

const Map = () => {
  const cookieConsent = getCookieConsentValue()
  console.log('cookieConsent='+cookieConsent)
  if(cookieConsent) return <OsmMap/>
  return <div className='staticOsmImage'>
      <StaticImage transformOptions={{fit: "inside"}} alt="Anfahrt Platzhalter" src="../../../static/images/osm-placeholder.png"/>
    </div>

}

export default Map
