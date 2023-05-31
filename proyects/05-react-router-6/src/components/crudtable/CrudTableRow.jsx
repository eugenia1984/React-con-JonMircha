import { useNavigate } from 'react-router-dom'
import './CrudTableRow.css'

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  // Destructuring
  const { name, constellation, id } = el
  const navigate = useNavigate()

  const handleEdit = () => {
    setDataToEdit(el)
    navigate(`/saints/edit/${id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={handleEdit} id="edit">
          Edit
        </button>
        <button onClick={() => deleteData(id)} id="delete">
          Delete
        </button>
      </td>
    </tr>
  )
}
