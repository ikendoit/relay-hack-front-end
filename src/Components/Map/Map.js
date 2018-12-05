import * as React from 'react'
import { GoogleMap } from 'react-google-maps'

import CrimeSpotRenderer from './Renderers/RenderCrimePoints'

const GoogleMapWrapper = (props) => {

	const map = React.createRef()

  // did mount => load init data
  React.useEffect( () => {
    console.log("on mount")
  })

  return (
    <div>
    <GoogleMap
      {...{
        ref: map,
        options: {
          mapTypeId: window.google.maps.MapTypeId.HYBRID,
        },
        defaultCenter: {lat: 49.2827, lng: -123.1207},
        zoom: 13,
        pointerEvents: 'none',
        style:{height: '100%'}
      }}>
        <CrimeSpotRenderer />
    </GoogleMap>
      <h1> hello world </h1>
    </div>
  )
}

export default GoogleMapWrapper
