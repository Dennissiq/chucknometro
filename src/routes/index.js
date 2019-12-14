import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import history from './history'
import store from '../store/index'

import Home from '../views/Home'
import CardCategory from '../views/CardCategory'

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:category" exact component={CardCategory} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Routes
