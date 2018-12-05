import React from 'react' 
import { withGoogleMap, withScriptjs } from 'react-google-maps'
import Map from './Map'

const apiKey =
	process.env.REACT_APP_GOOGLE_MAP

const WrappedMap = withScriptjs(withGoogleMap(Map))

  console.log(apiKey)
class GoogleMap extends React.Component {
	url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`
	get loadingElement() {
		return <div />
	}
	get containerElement() {
		return <div />
	}
	get mapElement() {
		return (
			<div style={{ height: 600, position: 'relative' }} />
		)
	}

	render() {
		return (
			<WrappedMap
				googleMapURL={this.url}
				loadingElement={this.loadingElement}
				containerElement={this.containerElement}
				mapElement={this.mapElement}
				{...this.props}
			/>
		)
	}
}

export default GoogleMap 
