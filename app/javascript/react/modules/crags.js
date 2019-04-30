const initialState = {
  crags: []
};

const crags = (state = initialState, action) => {
  switch(action.type) {
    case POPULATE_CRAGS:
      return {...state, crags: action.crags}
    default:
      return state;
  }
};

const POPULATE_CRAGS = 'POPULATE_CRAGS'

const populateCrags = crags => {
  return {
    type: POPULATE_CRAGS,
    crags: crags
  }
}

const REQUEST_CRAGS = 'REQUEST_CRAGS'

const requestCrags = location => {
  const { lat, lng } = location
  return dispatch => {
    return fetch(`/api/v1/crags/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(location)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        console.log("error");
      }
    })
    .then(response => response.json())
    .then(body => {
      debugger
    })
  }
}

export {
  crags,
  requestCrags
}
