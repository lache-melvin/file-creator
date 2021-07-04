import React, { ChangeEvent } from 'react'

import { Field } from '../data/fields'

interface PropTypes {
  field: Field
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function FormField ({ field, handleChange, value }: PropTypes): React.ReactElement {
  return <div>
    <label htmlFor={field.name}>{field.title}</label>
    <input
      id={field.name}
      name={field.name}
      placeholder={field.placeholder}
      value={value}
      onChange={handleChange}
    />
  </div>
}
