import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function Form (): React.ReactElement {
  const [testInput, setTestInput] = useState('')

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setTestInput(e.target.value)
  }

  function handleSubmit (e: FormEvent) {
    e.preventDefault()
    console.log(testInput)
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
