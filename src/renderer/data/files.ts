export interface File {
  id: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g',
  name: string,
  title: string,
  requiredInfo: string[]
}

export interface FileSelection {
  a: boolean,
  b: boolean,
  c: boolean,
  d: boolean,
  e: boolean,
  f: boolean,
  g: boolean
}

export const files: File[] = [
  {
    id: 'a',
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
    id: 'b',
    name: 'Inspection Schedule',
    title: 'IS.docx',
    requiredInfo: [
      'streetAddress',
      'town'
    ]
  },
  {
    id: 'c',
    name: 'Calcs Title Page',
    title: 'Calcs.docx',
    requiredInfo: [
      'streetAddress',
      'town'
    ]
  },
  {
    id: 'd',
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
    id: 'e',
    name: 'Letter - Generic',
    title: 'LTR - Generic.docx',
    requiredInfo: [
      'clientName',
      'clientAddress'
    ]
  },
  {
    id: 'f',
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
    id: 'g',
    name: 'Schedule 2A',
    title: 'Schedule 2A.docx',
    requiredInfo: [
      'clientName',
      'streetAddress',
      'town'
    ]
  }
]
