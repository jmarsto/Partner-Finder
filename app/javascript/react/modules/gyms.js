const initialState = {

};

const gyms = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

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
        return response.json()
      }
    })
    .then(gyms => {
      debugger
    })
  }
}

export {
  gyms,
  recordGyms
}
