import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { files, FileSelection } from '../data/files'
import { navigateTo } from './helpers/shared'

export default function SelectFiles (): React.ReactElement {
  const { register, handleSubmit } = useForm<FileSelection>()

  const submitSelection: SubmitHandler<FileSelection> = (selection) => {
    console.log(selection)
    navigateTo('form')
  }

  return (
    <form onSubmit={handleSubmit(submitSelection)}>
      <h3>Please select required files</h3>
        {files.map(fileData => {
          const { id, name } = fileData
          return (
            <div key={id}>
              <input
                type="checkbox"
                {...register(id)}
              />
              <label htmlFor={id}>{name}</label>
            </div>
          )
        })}
      <button>Next...</button>
    </form>
  )
}
