import React, { Component } from 'react';
import { connect } from 'react-redux';

import Switch from '../components/Switch'

class PreferencePanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="preference-panel row">
        <h4>pref panel</h4>
        <div className="preference">
          <p className="small-12 columns">pref 1</p>
          <div className="small-4 columns">
            <Switch />
          </div>
        </div>
        <div className="preference">
          <p className="small-12 columns">pref 2</p>
          <div className="small-4 columns">
            <Switch />
          </div>
        </div>
        <div className="preference">
          <p className="small-12 columns">pref 3</p>
          <div className="small-4 columns">
            <Switch />
          </div>
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
)(PreferencePanel)
