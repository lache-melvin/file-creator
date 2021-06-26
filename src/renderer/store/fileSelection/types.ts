import { Action } from 'redux'

export interface FileSelection {
  ps1: boolean
  is: boolean
  calcs: boolean
  sfa: boolean
  genltr: boolean
  srltr: boolean
  s2a: boolean
}

export const SET_FILE_SELECTION = 'SET_FILE_SELECTION'

export interface FileSelectionAction extends Action {
  type: typeof SET_FILE_SELECTION,
  selection: FileSelection
}
