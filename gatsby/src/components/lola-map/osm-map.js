import React from "react"

const lon0=10.204504430294039
const lat0=53.49484826469885

const lon1=10.206567049026491
const lat1=53.49606890629904

const lat=53.495425879874865
const lon=10.205826759338379




const Map = () => <>
  <iframe width='100%' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'
    src={`https://www.openstreetmap.org/export/embed.html?bbox=${lon0},${lat0},${lon1},${lat1}&layer=mapnik&marker=${lat},${lon}`}
    style={{border: '1px', solid: true, black: true}}>
  </iframe>
  <br />
  <small>
    <a href={`https://www.openstreetmap.org/?lat=${lat}&amp;lon=${lon}&amp;zoom=16&amp;layers=M`} target='_blank'>Gr&#246;&#223;ere Karte anzeigen</a>
  </small>
</>

// <LealetMap center={position} zoom={15} scrollWheelZoom={false}>
// <TileLayer
//   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// />
// <Marker position={position}>
//   <Popup>
//   Rednerclub Bergedorf im:<br/>
//   LOLA Kulturzentrum<br/>
//   Lohbrügger Landstr. 8<br/>
//   21031 Hamburg
//   </Popup>
// </Marker>
// </LealetMap>


export default Map