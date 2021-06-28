export type FieldName = 'clientName'
 | 'clientAddress'
 | 'clientEmail'
 | 'clientPhone'
 | 'streetAddress'
 | 'suburb'
 | 'town'
 | 'postcode'
 | 'council'
 | 'jobNumber'
 | 'jobName'

interface Field {
  name: FieldName
  title: string
  placeholder: string
}

export const requiredFields: FieldName[] = [
  'jobNumber',
  'streetAddress',
  'clientName'
]

export const fields: Field[] = [
  {
    name: 'jobNumber',
    title: 'Job Number',
    placeholder: 'e.g. 20202'
  },
  {
    name: 'council',
    title: 'Building Consent Authority',
    placeholder: 'e.g. Council of Councillors'
  },
  {
    name: 'jobName',
    title: 'Job Name (if applicable)',
    placeholder: 'e.g. Happy House'
  },
  {
    name: 'streetAddress',
    title: 'Street Address',
    placeholder: 'e.g. 123 Green Place'
  },
  {
    name: 'town',
    title: 'Town or City',
    placeholder: 'e.g. Fairymead'
  },
  {
    name: 'clientName',
    title: 'Client Name',
    placeholder: 'e.g. Jean Smith'
  },
  {
    name: 'clientEmail',
    title: 'Client Email',
    placeholder: 'e.g. jean.smith@example.com'
  },
  {
    name: 'clientAddress',
    title: 'Full Client Address',
    placeholder: 'e.g. 321 Happy Lane, Fairymead, Utopia'
  }
]
