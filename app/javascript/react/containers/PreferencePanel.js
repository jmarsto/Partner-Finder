import React, { Component } from 'react';
import { connect } from 'react-redux';

import Switch from '../components/Switch'

class PreferencePanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="side-panel row">
        <h4>Preferences</h4>
        <Switch
          title="Preference"
        />
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
