import { createReducer, createActions } from 'reduxsauce'

/* Types & Action Creators */
const { Types, Creators } = createActions({
  categoryRequest: ['category'],
  categorySuccess: ['data']
})

export const CategoryTypes = Types
export default Creators

/* Initial State */
export const INITIAL_STATE = {
  data: []
}

/* Reducers */
export const category = (state, { data }) => {
  return { ...state, data: data }
}

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_SUCCESS]: category
})
