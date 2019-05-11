import React, { Component } from 'react';
import { connect } from 'react-redux';

class Crags extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let cragList = (
      <ul>
        {this.props.crags.map(crag => {
          return (
            <li key={`${crag.lat}-${crag.lng}-${crag.name}`}>{crag.name}</li>)
        })}
      </ul>
    )
    return (
      <div>
        <p>Nearby Crags</p>
        {cragList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    crags: state.crags.crags

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crags)
