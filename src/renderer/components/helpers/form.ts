import { files } from '../../data/files'
import { defaultFields, fields, Field } from '../../data/fields'
import { FileSelection } from '../../store/fileSelection/types'

export function getRequiredFields (fileSelection: FileSelection): Field[] {
  const requiredFiles = files.filter(file => fileSelection[file.id])
  const fieldsNeeded = requiredFiles.reduce((accumFields, currentFile) => {
    currentFile.requiredInfo.forEach(field => {
      !accumFields.includes(field) && accumFields.push(field)
    })
    return accumFields
  }, [...defaultFields])
  return fields.filter(field => fieldsNeeded.includes(field.name))
}
