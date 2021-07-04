import { files } from '../../data/files'
import { defaultFields, FieldName } from '../../data/fields'
import { FileSelection } from '../../store/fileSelection/types'

export function getRequiredFields (fileSelection: FileSelection): FieldName[] {
  const requiredFiles = files.filter(file => fileSelection[file.id])
  return requiredFiles.reduce((accumFields, currentFile) => {
    currentFile.requiredInfo.forEach(field => {
      !accumFields.includes(field) && accumFields.push(field)
    })
    return accumFields
  }, [...defaultFields])
}
