import React from 'react'

import { File, FileId } from '../data/files'

interface PropTypes {
  fileInfo: File
  select: (id: FileId) => void
  checked: boolean
}

export default function FileOption ({ select, checked, fileInfo: { id, name } }: PropTypes): React.ReactElement {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        id={id}
        name={id}
        onChange={() => select(id)}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  )
}
