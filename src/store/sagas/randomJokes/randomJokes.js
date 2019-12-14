import { call, put } from 'redux-saga/effects'
import { api } from '../../../services/api'

import randomJokeActions from '../../ducks/randomJokes/randomJokes'

export function* loadRandomJoke() {
  try {
    const response = yield call(api.get, `/random`)
    yield put(randomJokeActions.randomJokeSuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}
