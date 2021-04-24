import {
  PageAction,
  PageState,
  SET_PAGE
} from './types'

const initialState: PageState = 'form'

export default function pageReducer (state = initialState, action: PageAction): PageState {
  switch (action.type) {
    case SET_PAGE:
      return action.page
    default:
      return state
  }
}
