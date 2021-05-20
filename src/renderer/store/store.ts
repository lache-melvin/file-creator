import { combineReducers, createStore } from 'redux'

import page from './page/reducer'

const reducer = combineReducers({
  page
})

export type RootState = ReturnType<typeof reducer>

const store = createStore(reducer)

export const dispatch = store.dispatch
export default store
