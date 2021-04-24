import {
  PageAction,
  PageState,
  SET_PAGE
} from './types'

export function setPage (page: PageState): PageAction {
  return {
    type: SET_PAGE,
    page
  }
}
