import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'

import { saveFile } from '../ipcRenderer/saveFile'
import { navigateTo } from './helpers/shared'
import { getRequiredFields } from './helpers/form'
import { RootState } from '../store/store'

export default function Form (): React.ReactElement {
  const selection = useSelector((globalState: RootState) => globalState.fileSelection)
  console.log(getRequiredFields(selection))
  const [testInput, setTestInput] = useState('')

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setTestInput(e.target.value)
  }

  async function handleSubmit (e: FormEvent) {
    e.preventDefault()
    await saveFile(testInput)
    navigateTo('success')
  }

  function goBack () {
    navigateTo('select')
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='testInput'>The first thing we&apos;re going to save!</label>
      <input
        id='testInput'
        name='testInput'
        value={testInput}
        onChange={handleChange}
      />
      <button>DO THE THING</button>
    </form>
    <button onClick={goBack}>Go back</button>
    </>
  )
}
