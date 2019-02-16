import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory, Route } from 'react-router'

import Landing from '../containers/Landing';


export const App = (props) => {
  return (
    <Provider store={props.store}>
      <Router history={browserHistory}>
        <Route path='/homes' component={Landing} />
      </Router>
    </Provider>
  )
}

export default App
