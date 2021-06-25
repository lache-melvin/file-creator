import { SubmitHandler } from 'react-hook-form'

import { navigateTo } from './shared'
import { FileId } from '../../data/files'

export const submitSelection: SubmitHandler<FileId[]> = (selection) => {
  console.log(selection)
  navigateTo('form')
}
