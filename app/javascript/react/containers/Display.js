import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from './Map';


class Display extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Map />
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
