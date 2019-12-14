import { createReducer, createActions } from 'reduxsauce'

/* Types & Action Creators */
const { Types, Creators } = createActions({
  randomJokeRequest: null,
  randomJokeSuccess: ['data']
})

export const RandomJokeTypes = Types
export default Creators

/* Initial State */
export const INITIAL_STATE = {
  data: []
}

/* Reducers */
export const randomJoke = (state, { data }) => {
  return { ...state, data: data }
}

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.RANDOM_JOKE_SUCCESS]: randomJoke
})
