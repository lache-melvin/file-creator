import { Action } from 'redux'

export const SET_PAGE = 'SET_PAGE'

export type Page = 'form' | 'success'

export interface PageAction extends Action {
  type: typeof SET_PAGE,
  page: Page
}
