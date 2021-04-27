import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ipcRenderer } from 'electron'

export default function Form (): React.ReactElement {
  const [testInput, setTestInput] = useState('')

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setTestInput(e.target.value)
  }

  async function handleSubmit (e: FormEvent) {
    e.preventDefault()
    const path = await ipcRenderer.invoke('getDownloadsPath')
    console.log(path)
  }

  return (
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
  )
}
