import React, { Component } from 'react';
import { connect } from 'react-redux';

import { allowLocationUse } from '../modules/users';


class LocationPermission extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    let allowLocation = () => {
      this.props.allowLocationUse(this.props.userId)
    }

    return (
      <div>
        <button onClick={allowLocation}>Use my Location</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.users.user.id,
    locationPermission: state.users.user.location_permission
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
