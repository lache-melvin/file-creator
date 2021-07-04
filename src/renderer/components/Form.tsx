import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'

// import { saveFile } from '../ipcRenderer/saveFile'
import { formSections } from '../data/fields'
import { navigateTo } from './helpers/shared'
import { getRequiredFields } from './helpers/form'
import { RootState } from '../store/store'

import FormSection from './FormSection'

export default function Form (): React.ReactElement {
  const [form, setForm] = useState({
    jobNumber: '',
    jobName: '',
    streetAddress: '',
    clientName: '',
    clientAddress: '',
    clientEmail: '',
    town: '',
    council: ''
  })

  const fileSelection = useSelector((globalState: RootState) => globalState.fileSelection)
  const requiredFields = getRequiredFields(fileSelection)

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleSubmit (e: FormEvent) {
    e.preventDefault()
    console.log(form)
    // await saveFile(testInput)
    navigateTo('success')
  }

  function goBack () {
    navigateTo('select')
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      {formSections.map(section => (
        <FormSection
          key={section.title}
          handleChange={handleChange}
          title={section.title}
          sectionFields={section.sectionFields.reduce((acc, field) => {
            requiredFields.includes(field.name) && acc.push({ data: field, value: form[field.name] })
            return acc
          }, [])}
        />
      ))}
      <button>DO THE THING</button>
    </form>
    <button onClick={goBack}>Go back</button>
    </>
  )
}
