import React from 'react'
import { UseFormRegister } from 'react-hook-form'

import { File, FileId } from '../data/files'

interface PropTypes {
  fileInfo: File
  register: UseFormRegister<FileId[]>
}

export default function FileOption ({ register, fileInfo: { id, name } }: PropTypes): React.ReactElement {
  return (
    <div>
      <input
        type="checkbox"
        {...register(id)}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  )
}
