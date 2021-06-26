import { navigateTo } from './shared'
import { FileSelection } from '../../data/files'

export function submitSelection (selection: FileSelection): void {
  console.log(selection)
  navigateTo('form')
}
