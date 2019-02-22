import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../modules/users';
import Map from './Map';


class Landing extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUser()
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
    getUser: () => dispatch(getUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)