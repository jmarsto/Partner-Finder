import React, { Component } from 'react';
import { connect } from 'react-redux';

import { allowLocationUse } from '../modules/users';


class LocationPermission extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    let locationButtonDisplay
    if (this.props.locationPermission) {
      locationButtonDisplay = "none"
    } else {
      locationButtonDisplay = "inline-block"
    }

    let allowLocation = () => {
      this.props.allowLocationUse(this.props.userId)
    }

    return (
      <div style={{ display: locationButtonDisplay }}>
        <button onClick={allowLocation}>Use my Location</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.users.user.info.id,
    locationPermission: state.users.user.info.location_permission
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allowLocationUse: (userId) => dispatch(allowLocationUse(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPermission)
