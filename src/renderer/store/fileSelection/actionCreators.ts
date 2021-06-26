import {
  FileSelectionAction,
  FileSelection,
  SET_FILE_SELECTION
} from './types'

export function setFileSelection (selection: FileSelection): FileSelectionAction {
  return {
    type: SET_FILE_SELECTION,
    selection
  }
}
