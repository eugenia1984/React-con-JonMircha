import { useFetch } from '../../hooks/useFetch'

export default function HooksPersonalizados() {
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  // console.log(useFetch)
  const { data, isPending, error } = useFetch(url)
  return (
    <>
      <h2>Custom hooks</h2>
      <h3>isPending = {JSON.stringify(isPending)}</h3>
      <h3>
        error = <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
      <hr />
    </>
  )
}
