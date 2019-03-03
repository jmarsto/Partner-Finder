import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMapReact from 'google-map-react';

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

    const handleApiLoaded = (map, maps) => {
      var request = {
        location: center,
        radius: '100',
        query: ['climbing gym'],
        type: 'gym'
      };

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          createMarkers(results);
        }
      }


      function createMarkers(places) {

        places.forEach(place => {

          let marker = new google.maps.Marker({
            map: map,
            title: place.name,
            position: place.geometry.location
          });

          let infoWindow = new google.maps.InfoWindow({
            content: marker.title
          })

          marker.addListener('mouseover', function() {
            infoWindow.open(map, marker)
          })

          marker.addListener('mouseout', function() {
            infoWindow.close();
          })

        })
      }

      let service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
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
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
          </GoogleMapReact>
        </div>
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
