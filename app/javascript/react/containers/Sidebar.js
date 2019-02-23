import React, { Component } from 'react';
import { connect } from 'react-redux';

import Switch from '../components/Switch';

class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="menu vertical">
          <h1>sidebar</h1>
          <Switch />
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
