import React, { Component } from 'react';
import { connect } from 'react-redux';

import PreferencePanel from './PreferencePanel'
import FriendsPanel from './FriendsPanel'

class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="menu vertical">
          <PreferencePanel />
          <FriendsPanel />
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
)(SideBar)
