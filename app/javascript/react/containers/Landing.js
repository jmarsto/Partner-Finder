import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../modules/users';
import Display from './Display';
import Sidebar from './Sidebar';


class Landing extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div className="row">
        <div className="large-3 columns sidebar">
          <Sidebar />
        </div>
        <div className="large-13 columns">
          <Display />
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
    getUser: () => dispatch(getUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
