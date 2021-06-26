import {
  SET_FILE_SELECTION,
  FileSelectionAction,
  FileSelection
} from './types'

const initialState: FileSelection = {
  ps1: false,
  is: false,
  calcs: false,
  sfa: false,
  genltr: false,
  srltr: false,
  s2a: false
}

export default function fileSelectionReducer (state = initialState, action: FileSelectionAction): FileSelection {
  switch (action.type) {
    case SET_FILE_SELECTION:
      return action.selection
    default:
      return state
  }
}
