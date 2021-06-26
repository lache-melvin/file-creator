import React from 'react'

import { File, FileId } from '../data/files'

interface PropTypes {
  fileInfo: File
  select: (id: FileId) => void
}

export default function FileOption ({ select, fileInfo: { id, name } }: PropTypes): React.ReactElement {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={id}
        onClick={() => select(id)}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  )
}
