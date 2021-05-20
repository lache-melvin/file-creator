import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../store/store'
import { navigateTo } from './helpers/shared'

import Form from './Form'
import SelectFiles from './SelectFiles'

export default function App (): React.ReactElement {
  const page = useSelector((globalState: RootState) => globalState.page)

  return (
    <>
      {page === 'select' &&
      <>
        <SelectFiles />
      </>}
      {page === 'form' &&
      <>
        <Form />
      </>}
      {page === 'success' &&
      <>
        <h1>HI THERE THIS IS THE SUCCESS PAGE!</h1>
        <button onClick={() => navigateTo('select')}>Start Again</button>
      </>}
    </>
  )
}
