import './CrudTableRow.css'

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  // Destructuring
  const { name, constellation, id } = el

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el) } id="edit">Edit</button>
        <button onClick={() => deleteData(id)} id="delete">Delete</button>
      </td>
    </tr>
  )
}
