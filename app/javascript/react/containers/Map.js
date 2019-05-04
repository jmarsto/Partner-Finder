import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMapReact from 'google-map-react';

import { recordGyms } from '../modules/gyms';
import { requestCrags } from '../modules/crags';
import { setMap } from '../modules/maps';

import LocationPermission from '../components/LocationPermission.js'
import LocationSearchInput from '../components/LocationSearchInput.js'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  createMarkers = (places) => {
    places.forEach(place => {
      let map = this.props.googleMap
      let marker
      let infoWindow

      if (place.geometry) {
        // for GYMS
        marker = new google.maps.Marker({
          map: map,
          title: place.name,
          position: place.geometry.location
        });

        infoWindow = new google.maps.InfoWindow({
          content: '<div><strong>' + place.name + '</strong><br>' +
              place.formatted_address + '</div>'
        })
      } else {
        // for CRAGS
        marker = new google.maps.Marker({
          map: map,
          title: place.name,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          },
          position: {
            lat: place.lat,
            lng: place.lng
          }
        });

        infoWindow = new google.maps.InfoWindow({
          content: '<div><strong>' + place.name + '</strong><br>' + '</div>'
        })
      }

      marker.addListener('mouseover', function() {
        infoWindow.open(map, marker)
      })

      marker.addListener('mouseout', function() {
        infoWindow.close();
      })
    })
  }

  componentDidUpdate() {
    this.createMarkers(this.props.crags)
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

    const requestCrags = (location) => {
      this.props.requestCrags(location)
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

      const callback = (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          this.createMarkers(results);
          recordGyms(results)
        }
      }

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
      if (center.lat) {
        requestCrags(center);
      }
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
    googleMaps: state.maps.googleMaps,
    crags: state.crags.crags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recordGyms: (results) => dispatch(recordGyms(results)),
    requestCrags: (location) => dispatch(requestCrags(location)),
    setMap: (map, maps) => dispatch(setMap(map, maps))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
