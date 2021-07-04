import React, { ChangeEvent } from 'react'

import { Field } from '../data/fields'

import FormField from './FormField'

interface FieldInfo {
  data: Field
  value: string
}

interface PropTypes {
  title: string
  sectionFields: FieldInfo[]
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function FormSection ({ title, sectionFields, handleChange }: PropTypes): React.ReactElement {
  return (
    <>
      <h2>{title}</h2>
      {sectionFields.map(field => (
        <FormField
          key={field.data.name}
          field={field.data}
          handleChange={handleChange}
          value={field.value}
        />
      ))}
    </>
  )
}
