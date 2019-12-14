import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as category } from './category/categorySelected'
import { reducer as categoryList } from './category/categoryList'
import { reducer as randomJoke } from './randomJokes/randomJokes'

export default history =>
  combineReducers({
    category,
    categoryList,
    randomJoke,
    router: connectRouter(history)
  })
