import React, { Component } from 'react';
import { connect } from 'react-redux';

class SetLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: ''
    }
  }


  render() {

    let setLocation = () => {
      this.props.setLocation(this.props.userId)
    }

    return (
      <div>
        <p>smart input to set location</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.users.user.info.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetLocation)
