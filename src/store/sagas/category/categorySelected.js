import { call, put } from 'redux-saga/effects'
import { api } from '../../../services/api'

import categoryActions from '../../ducks/category/categorySelected'

export function* loadCategorySelected(request) {
  try {
    const response = yield call(api.get, `/random?category=${request.category}`)
    yield put(categoryActions.categorySuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}
