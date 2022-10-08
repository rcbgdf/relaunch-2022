import React from "react"
import { MapContainer as LealetMap, TileLayer, Marker, Popup } from 'react-leaflet'
const position = [ 53.4953819, 10.2058116 ]


const Map = () => <LealetMap center={position} zoom={15} scrollWheelZoom={false}>
<TileLayer
  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position}>
  <Popup>
  Rednerclub Bergedorf im:<br/>
  LOLA Kulturzentrum<br/>
  Lohbrügger Landstr. 8<br/>
  21031 Hamburg
  </Popup>
</Marker>
</LealetMap>


export default Map