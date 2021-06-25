import React from 'react'
import { useForm } from 'react-hook-form'

import { files, FileId } from '../data/files'
import { submitSelection } from './helpers/selectFiles'

import FileOption from './FileOption'

export default function SelectFiles (): React.ReactElement {
  const { register, handleSubmit } = useForm<FileId[]>()

  return (
    <form onSubmit={handleSubmit(submitSelection)}>
      <h3>Please select required files</h3>
        {files.map(fileInfo => {
          return <FileOption key={fileInfo.id} register={register} fileInfo={fileInfo} />
        })}
      <button>Next...</button>
    </form>
  )
}
