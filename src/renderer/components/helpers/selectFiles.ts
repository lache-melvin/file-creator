import { SubmitHandler } from 'react-hook-form'

import { navigateTo } from './shared'
import { FileSelection } from '../../data/files'

export const submitSelection: SubmitHandler<FileSelection> = (selection) => {
  console.log(selection)
  navigateTo('form')
}
