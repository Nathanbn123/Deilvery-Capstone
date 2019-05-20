import React from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

function Map() {

  return (

  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 45.4211, lng: -75.6903 }}

  >
  </GoogleMap>

  )
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.API_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
