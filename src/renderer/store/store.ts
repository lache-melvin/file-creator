import { combineReducers, createStore } from 'redux'

import page from './page/reducer'

const reducer = combineReducers({
  page
})

export type RootState = ReturnType<typeof reducer>

export default createStore(reducer)
