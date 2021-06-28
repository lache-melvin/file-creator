import { files } from '../../data/files'
import { requiredFields, fields, Field } from '../../data/fields'
import { FileSelection } from '../../store/fileSelection/types'

export function getRequiredFields (fileSelection: FileSelection): Field[] {
  const requiredFiles = Object.keys(fileSelection).filter(id => fileSelection[id])
  const fieldsNeeded = requiredFiles.reduce((accumFields, fileName) => {
    const currentFile = files.find(file => file.id === fileName)
    currentFile.requiredInfo.forEach(field => {
      !accumFields.includes(field) && accumFields.push(field)
    })
    return accumFields
  }, [...requiredFields])
  return fields.filter(field => fieldsNeeded.includes(field.name))
}
