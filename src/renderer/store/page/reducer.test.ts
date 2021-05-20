import { PageAction, SET_PAGE } from './types'

import pageReducer from './reducer'

describe('page reducer', () => {
  it('returns the new page on SET_PAGE', () => {
    const oldState = 'form'
    const action: PageAction = {
      type: SET_PAGE,
      page: 'success'
    }
    const newState = pageReducer(oldState, action)
    expect(newState).toBe('success')
  })

  it('returns the old page state on unknown action', () => {
    const oldState = 'form'
    const action: PageAction = {
      type: 'NOT_A_PAGE_ACTION',
      page: 'success'
    }
    const newState = pageReducer(oldState, action)
    expect(newState).toBe(oldState)
  })
})
