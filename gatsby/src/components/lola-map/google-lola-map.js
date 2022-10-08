import React from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "400px",
}

const center = { lat: 1.0*process.env.GATSBY_LOLA_LAT, lng: 1.0*process.env.GATSBY_LOLA_LNG }

function LolaMap() {
  //const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const pos = new window.google.maps.LatLng(center.lat, center.lng)
    const marker = new window.google.maps.Marker({
      position: pos,
      title: "Lola",
    })
    marker.setMap(map)
    // const bounds = new window.google.maps.LatLngBounds()
    // map.fitBounds(bounds)
    //setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    //setMap(null)
  }, [])

  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(LolaMap)
