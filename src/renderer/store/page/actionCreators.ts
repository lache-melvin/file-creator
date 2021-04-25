import {
  PageAction,
  Page,
  SET_PAGE
} from './types'

export function setPage (page: Page): PageAction {
  return {
    type: SET_PAGE,
    page
  }
}
