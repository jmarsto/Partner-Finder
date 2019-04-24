import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMapReact from 'google-map-react';

import { recordGyms } from '../modules/gyms';
import { setMap } from '../modules/maps';

import LocationPermission from '../components/LocationPermission.js'
import LocationSearchInput from '../components/LocationSearchInput.js'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let locationPrompt
    let mapVisibility
    if (this.props.user.location_permission) {
      mapVisibility = "visible"
      locationPrompt = <LocationSearchInput />
    } else {
      mapVisibility = "hidden"
      locationPrompt = <LocationPermission />
    }

    let defaultCenter = {
      lat: 40.0150,
      lng: -105.2705
    }

    let center = {
      lat: this.props.user.lat,
      lng: this.props.user.lng
    }

    const recordGyms = (results) => {
      this.props.recordGyms(results)
    }

    const initMap = (map, maps) => {

      this.props.setMap(map, maps)

      getGymsAndCrags(map, maps)
    }

    const getGymsAndCrags = (map, maps) => {


      const request = {
        location: center,
        radius: '100',
        query: ['climbing gym'],
        type: 'gym'
      };

      const createMarkers = (places) => {

        places.forEach(place => {
          let marker = new google.maps.Marker({
            map: map,
            title: place.name,
            position: place.geometry.location
          });

          let infoWindow = new google.maps.InfoWindow({
            content: '<div><strong>' + place.name + '</strong><br>' +
                place.formatted_address + '</div>'
          })

          marker.addListener('mouseover', function() {
            infoWindow.open(map, marker)
          })

          marker.addListener('mouseout', function() {
            infoWindow.close();
          })

        })
      }

      const callback = (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          createMarkers(results);
          recordGyms(results)
        }
      }

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
      // getRoutesForLatLon with 'center', organize by location
      // do response LOCATIONS have lat/lng?
    };

    return (
      <div>
        {locationPrompt}
        <div style={{ height: '80vh', visibility: mapVisibility }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC2OOyKO15UdGHpZvog3vqzv6ULUi0zVVM" }}
            defaultCenter={defaultCenter}
            center={center}
            defaultZoom={11}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => initMap(map, maps)}
            onChange={getGymsAndCrags(this.props.googleMap, this.props.googleMaps)}
          >
          </GoogleMapReact>
        </div>
      </div>
        );
      }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    googleMap: state.maps.googleMap,
    googleMaps: state.maps.googleMaps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recordGyms: (results) => dispatch(recordGyms(results)),
    setMap: (map, maps) => dispatch(setMap(map, maps))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
