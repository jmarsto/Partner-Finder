import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from './Map';
import Areas from './Areas';
import Crags from './Crags.js'
import Gyms from './Gyms.js'
import RightGutter from './RightGutter';


class Display extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row" id="display">
        <div className="large-4 columns">
          <Crags />
        </div>
        <div className="large-8 columns">
          <Map />
        </div>
        <div className="large-4 columns">
          <Gyms />
        </div>
      </div>
    )
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
)(Display)
