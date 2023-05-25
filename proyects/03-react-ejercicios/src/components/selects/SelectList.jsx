import { useFetch } from '../hooks/useFetch'
import { Loader } from '../Loader'
import { Message } from '../Message'

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url)
  console.log('data: ', data, ', error:', error, ', loading: ', loading)

  if (!data) return null
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    )
  }

  let id = `select-${title}`
  let label = title.charAt(0).toUpperase() + title.slice(1)
  let options = data.response[title]

  return (
    <>
      <label htmlFor={id}>{label} </label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Select a {title}</option>
        {data &&
          options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  )
}

export default SelectList
