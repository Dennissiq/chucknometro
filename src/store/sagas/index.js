import { all, takeLatest } from 'redux-saga/effects'

import { loadCategories } from './category/categoryList'
import { loadCategorySelected } from './category/categorySelected'
import { loadRandomJoke } from './randomJokes/randomJokes'

import { CategoryListTypes } from '../ducks/category/categoryList'
import { CategoryTypes } from '../ducks/category/categorySelected'
import { RandomJokeTypes } from '../ducks/randomJokes/randomJokes'

export default function* rootSaga() {
  yield all([
    takeLatest(CategoryTypes.CATEGORY_REQUEST, loadCategorySelected),
    takeLatest(CategoryListTypes.CATEGORY_LIST_REQUEST, loadCategories),
    takeLatest(RandomJokeTypes.RANDOM_JOKE_REQUEST, loadRandomJoke)
  ])
}
