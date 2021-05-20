import { Action } from 'redux'

export const SET_PAGE = 'SET_PAGE'

export type Page = 'select' | 'form' | 'success'

export interface PageAction extends Action {
  type: string,
  page: Page
}
