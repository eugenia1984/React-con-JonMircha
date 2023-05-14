import { useState } from 'react'
import { CrudTable } from './CrudTable'
import { CrudForm } from './CrudForm'

const initialDb = [
  {
    id: 1,
    name: 'Seiya',
    constellation: 'Pegaso'
  },
  {
    id: 2,
    name: 'Shiryu',
    constellation: 'Dragón'
  },
  {
    id: 3,
    name: 'Hyoga',
    constellation: 'Cisne'
  },
  {
    id: 4,
    name: 'Shun',
    constellation: 'Andrómeda'
  },
  {
    id: 5,
    name: 'Ikki',
    constellation: 'Fénix'
  }
]

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb)

  return (
    <>
      <h2>CRUD</h2>
      <CrudForm />
      <CrudTable data={db}/>
    </>
  )
}
