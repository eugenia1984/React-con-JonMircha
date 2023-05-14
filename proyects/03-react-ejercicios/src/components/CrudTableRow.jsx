import React from 'react'

export const CrudTableRow = ({el}) => {
  // Destructuring
  const { name, constellation } = el

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  )
}
