import { combineReducers, createStore } from 'redux'

import page from './page/reducer'
import fileSelection from './fileSelection/reducer'

const reducer = combineReducers({
  page,
  fileSelection
})

export type RootState = ReturnType<typeof reducer>

const store = createStore(reducer)

export const dispatch = store.dispatch
export default store
