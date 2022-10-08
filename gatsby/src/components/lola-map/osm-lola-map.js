import React from "react"
//import { GoogleMap, LoadScript } from "@react-google-maps/api"
import Loadable from "@loadable/component"
import { Helmet } from 'react-helmet'

import "./osm-lola-map.css"

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// }

//const center = { lat: 53.4953819, lng: 10.2058116 }

const Loading = () => <div>Loading...</div>


const LazyMap = Loadable({
        loading: Loading,
        loader: () => import('./osm-map')
    })

function LolaMap() {
  //const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const pos = new window.google.maps.LatLng(center.lat, center.lng)
  //   const marker = new window.google.maps.Marker({
  //     position: pos,
  //     title: "Lola",
  //   })
  //   marker.setMap(map)
  //   // const bounds = new window.google.maps.LatLngBounds()
  //   // map.fitBounds(bounds)
  //   //setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   //setMap(null)
  // }, [])
  return (
    <>
      <Helmet>
        <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
      </Helmet>
      <LazyMap/>
    </>
  )
}


export default LolaMap
