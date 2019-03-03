import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from './Map';
import Areas from './Areas';
import RightGutter from './RightGutter';


class Display extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row" id="display">
        <div className="large-2 columns">
          <Areas />
        </div>
        <div className="large-12 columns">
          <Map />
        </div>
        <div className="large-2 columns">
          <RightGutter />
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
