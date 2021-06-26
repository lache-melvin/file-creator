import { navigateTo } from './shared'
import { dispatch } from '../../store/store'
import { FileSelection } from '../../store/fileSelection/types'
import { setFileSelection } from '../../store/fileSelection/actionCreators'

export function submitSelection (selection: FileSelection): void {
  dispatch(setFileSelection(selection))
  navigateTo('form')
}
