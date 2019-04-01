import React, { Component } from 'react';
import { connect } from 'react-redux';

class FriendsPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="side-panel row">
        <h4>Friends</h4>

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
)(FriendsPanel)
