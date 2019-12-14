import { call, put } from 'redux-saga/effects'
import { api } from '../../../services/api'

import categoryListActions from '../../ducks/category/categoryList'

export function* loadCategories() {
  try {
    const response = yield call(api.get, `/categories`)
    yield put(categoryListActions.categoryListSuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}
