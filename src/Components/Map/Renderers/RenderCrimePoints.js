import React from 'react'
// consider marker with label for extra data crunching
import { Marker } from 'react-google-maps'
import { srided } from '../../../data/XandY'
import { connect } from 'react-redux'
const renderCrimePoints = (props) => {

  const crimeSpots = props.crimeSpots || []
  if (!crimeSpots.length) crimeSpots.concat(['1', '2', '3'])

  const renderCrime = () => {
    const data = srided
    .filter(spot => {
      const { fromYear, toYear, fromMonth, toMonth } = props
      if (fromYear && fromYear > parseInt(spot[1]))
        return false

      if (toYear && toYear < parseInt(spot[1]))
        return false

      if (toMonth && toMonth < parseInt(spot[2]))
        return false

      if (fromYear && fromMonth > parseInt(spot[2]))
        return false

      return true
    })
    .map(spot => {
      return (
        <Marker
          key={`${spot.toString()}`}
          icon={'/asset/circle.svg'}
          options={{
            color: 'yellow'
          }}
          position={{
            lat: spot[9], 
            lng: spot[8]
          }}
        />
      )
    })
    return data
  }
  
  return (
    <div>
      {renderCrime()}
    </div>
  )
}

const mapState = state => ({
  fromYear: state.filter.fromYear,
  toYear: state.filter.toYear,
  fromMonth: state.filter.fromMonth,
  ToMonth: state.filter.toMonth,
})

export default connect(mapState)(renderCrimePoints)
