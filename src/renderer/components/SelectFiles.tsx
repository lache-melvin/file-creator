import React, { useState, FormEvent } from 'react'
import { useSelector } from 'react-redux'

import { files, FileId } from '../data/files'
import { submitSelection } from './helpers/selectFiles'
import { RootState } from '../store/store'

import FileOption from './FileOption'

export default function SelectFiles (): React.ReactElement {
  const selection = useSelector((globalState: RootState) => globalState.fileSelection)
  const [fileSelection, setFileSelection] = useState(selection)

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
