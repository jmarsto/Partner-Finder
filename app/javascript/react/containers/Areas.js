import React, { Component } from 'react';
import { connect } from 'react-redux';

import Crags from './Crags.js'
import Gyms from './Gyms.js'

class Areas extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <div className="row">
        <div className="small-16 columns">
          <Crags />
        </div>
        <div className="small-16 columns">
          <Gyms />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Areas)
