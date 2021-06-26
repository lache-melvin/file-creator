type Field = 'clientName'
 | 'clientAddress'
 | 'clientEmail'
 | 'streetAddress'
 | 'town'
 | 'council'

export type FileId = 'ps1'
 | 'is'
 | 'calcs'
 | 'sfa'
 | 'genltr'
 | 'srltr'
 | 's2a'

export interface File {
  id: FileId
  name: string
  title: string
  requiredInfo: Field[]
}

export interface FileSelection {
  ps1: boolean
  is: boolean
  calcs: boolean
  sfa: boolean
  genltr: boolean
  srltr: boolean
  s2a: boolean
}

export const files: File[] = [
  {
    id: 'ps1',
    name: 'PS1',
    title: 'PS1.docx',
    requiredInfo: [
      'clientName',
      'council',
      'streetAddress',
      'town'
    ]
  },
  {
    id: 'is',
    name: 'Inspection Schedule',
    title: 'IS.docx',
    requiredInfo: [
      'streetAddress',
      'town'
    ]
  },
  {
    id: 'calcs',
    name: 'Calcs Title Page',
    title: 'Calcs.docx',
    requiredInfo: [
      'streetAddress',
      'town'
    ]
  },
  {
    id: 'sfa',
    name: 'Short Form Agreement',
    title: 'SFA.docx',
    requiredInfo: [
      'clientName',
      'clientAddress',
      'clientEmail',
      'streetAddress',
      'town'
    ]
  },
  {
    id: 'genltr',
    name: 'Letter - Generic',
    title: 'LTR - Generic.docx',
    requiredInfo: [
      'clientName',
      'clientAddress'
    ]
  },
  {
    id: 'srltr',
    name: 'Letter - Seismic Restraint',
    title: 'LTR - Seismic Restraint.docx',
    requiredInfo: [
      'clientName',
      'clientAddress',
      'streetAddress',
      'town'
    ]
  },
  {
    id: 's2a',
    name: 'Schedule 2A',
    title: 'Schedule 2A.docx',
    requiredInfo: [
      'clientName',
      'streetAddress',
      'town'
    ]
  }
]
