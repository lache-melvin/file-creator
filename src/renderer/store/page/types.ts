import { Action } from 'redux'

export const SET_PAGE = 'SET_PAGE'

export type PageState = 'form' | 'success'

export interface PageAction extends Action {
  type: typeof SET_PAGE,
  page: PageState
}
