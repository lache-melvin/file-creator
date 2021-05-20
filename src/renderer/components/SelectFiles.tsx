import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { files, FileSelection } from '../data/files'
import { setPage } from '../store/page/actionCreators'
import { Page } from '../store/page/types'

export default function SelectFiles (): React.ReactElement {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm<FileSelection>()

  function handleChangePage (page: Page): void {
    dispatch(setPage(page))
  }

  const submitSelection: SubmitHandler<FileSelection> = (selection) => {
    console.log(selection)
    handleChangePage('form')
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
