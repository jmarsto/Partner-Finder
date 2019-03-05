const initialState = {
  googleMap: {},
  googleMaps: {}
};

const maps = (state = initialState, action) => {
  switch(action.type) {
    case SET_MAPS:
      return {...state,
        googleMap: action.googleMap,
        googleMaps: action.googleMaps
      }
    default:
      return state;
  }
};

const SET_MAPS = 'SET_MAPS'

const setMap = (googleMap, googleMaps) => {
  console.log(googleMap);
  console.log(googleMaps);
  debugger
  return {
    type: SET_MAPS,
    googleMap: googleMap,
    googleMaps: googleMaps
  }
}

export {
  maps,
  googleMap,
  googleMaps,
  setMap
}
