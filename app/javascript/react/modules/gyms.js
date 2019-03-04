const initialState = {
  gyms: []
};

const gyms = (state = initialState, action) => {
  switch(action.type) {
    case POPULATE_GYMS:
      return {...state, gyms: action.gyms}
    default:
      return state;
  }
};

const POPULATE_GYMS = 'POPULATE_GYMS'


const populateGyms = gyms => {
  return {
    type: POPULATE_GYMS,
    gyms: gyms
  }
}

const recordGyms = results => {

  let gyms = results.map(result => {
    return {
      name: result.name,
      lat: result.geometry.location.lat(),
      lng: result.geometry.location.lng()
    }
  })

  return dispatch => {
    return fetch(`/api/v1/gyms.json`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(gyms)
    })
    .then(response => {
      if (response.ok) {
        dispatch(populateGyms(gyms))
      }
    })
  }
}

export {
  gyms,
  recordGyms
}
