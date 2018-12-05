import React from 'react'
// consider marker with label for extra data crunching
import { Marker } from 'react-google-maps'

const renderCrimePoints = (props) => {

  const crimeSpots = props.crimeSpots || []
  if (!crimeSpots.length) crimeSpots.concat(['1', '2', '3'])

  const renderCrime = () => {
    const data = crimeSpots.map(spot => {
      return (
        <Marker
          location={{lat: 0, lng: 0}}
        />
      )
    })
  }
  
  return (
    <div>
      {renderCrime()}
    </div>
  )
}

export default renderCrimePoints
