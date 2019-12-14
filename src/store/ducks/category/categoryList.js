import { createReducer, createActions } from 'reduxsauce'

/* Types & Action Creators */
const { Types, Creators } = createActions({
  categoryListRequest: null,
  categoryListSuccess: ['data']
})

export const CategoryListTypes = Types
export default Creators

/* Initial State */
export const INITIAL_STATE = {
  data: []
}

/* Reducers */
export const categoryList = (state, { data }) => {
  return { ...state, data: data }
}

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_LIST_SUCCESS]: categoryList
})
