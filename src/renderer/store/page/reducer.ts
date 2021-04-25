import {
  PageAction,
  Page,
  SET_PAGE
} from './types'

const initialState: Page = 'form'

export default function pageReducer (state = initialState, action: PageAction): Page {
  switch (action.type) {
    case SET_PAGE:
      return action.page
    default:
      return state
  }
}
