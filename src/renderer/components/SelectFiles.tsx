import React, { useState, FormEvent } from 'react'

import { files, FileId } from '../data/files'
import { submitSelection } from './helpers/selectFiles'

import FileOption from './FileOption'

export default function SelectFiles (): React.ReactElement {
  const [fileSelection, setFileSelection] = useState({
    ps1: false,
    is: false,
    calcs: false,
    sfa: false,
    genltr: false,
    srltr: false,
    s2a: false
  })

  function select (id: FileId) {
    setFileSelection({
      ...fileSelection,
      [id]: !fileSelection[id]
    })
  }

  function submit (e: FormEvent) {
    e.preventDefault()
    submitSelection(fileSelection)
  }

  return (
    <form onSubmit={submit}>
      <h3>Please select required files</h3>
        {files.map(fileInfo => {
          return <FileOption key={fileInfo.id} select={select} fileInfo={fileInfo} />
        })}
      <button>Next...</button>
    </form>
  )
}
