import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMapReact from 'google-map-react';

import LocationPermission from '../components/LocationPermission.js'
import SetLocation from '../components/SetLocation.js'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let mapVisibility
    if (this.props.user.info.location_permission) {
      mapVisibility = "visible"
    } else {
      mapVisibility = "hidden"
    }

    let defaultCenter = {
      lat: 40.0150,
      lng: -105.2705
    }

    let center = {
      lat: this.props.user.info.lat,
      lng: this.props.user.info.lng
    }

    return (
      <div>
        <div style={{ height: '80vh', width: '80%', margin: "auto", marginTop: "10px", visibility: mapVisibility }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC2OOyKO15UdGHpZvog3vqzv6ULUi0zVVM" }}
            defaultCenter={defaultCenter}
            center={center}
            defaultZoom={11}
          >
          </GoogleMapReact>
        </div>
        <LocationPermission />
        <SetLocation />
      </div>
        );
      }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
