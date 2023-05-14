import { CrudApiTableRow } from './CrudApiTableRow'
// import './CrudTable.css'

export const CrudApiTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Data table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Constellation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudApiTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
