const initialState = {
  user: null
};

const users = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_SUCCESS:
      return {...state, user: action.user}
    default:
      return state;
  }
};

const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

const getUserSuccess = user => {
  return {
    type: GET_USER_SUCCESS,
    user: user
  }
}

const getUser = () => {
  return dispatch => {
    return fetch(`/api/v1/users.json`)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        console.log("Error in fetch");
      }
    })
    .then(user => {
      dispatch(getUserSuccess(user))
    })
  }
}

export {
  users,
  getUser
}
