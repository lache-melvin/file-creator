import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../store/store'
import { setPage } from '../store/page/actionCreators'
import { Page } from '../store/page/types'

export default function App (): React.ReactElement {
  const dispatch = useDispatch()
  const page = useSelector((globalState: RootState) => globalState.page)

  function handleChangePage (page: Page): void {
    dispatch(setPage(page))
  }

  return (
    <>
      {page === 'form' &&
      <>
        <h1>HI THERE FORM PAGE!</h1>
        <button onClick={() => handleChangePage('success')}>Success</button>
      </>}
      {page === 'success' &&
      <>
        <h1>HI THERE SUCCESS PAGE!</h1>
        <button onClick={() => handleChangePage('form')}>Form</button>
      </>}
    </>
  )
}
