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

export {
  crags
}
