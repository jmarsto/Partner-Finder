import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gyms extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    let gymList = (
      <ul>
        {this.props.gyms.map(gym => {
          return (
            <li key={`${gym.lat}-${gym.lng}`}>{gym.name}</li>)
        })}
      </ul>
    )

    return (
      <div>
        <p>gyms</p>
        {gymList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gyms: state.gyms.gyms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gyms)
