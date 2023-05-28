// import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

export const Products = () => {
  // http://127.0.0.1:5173/products?inicio=1&fin=20
  const LIMIT = 20
  const TOTAL_PRODUCTS = 300
  // useLocation
  // const {search} = useLocation()
  // const query = new URLSearchParams(search)
  // const inicio = query.get('inicio')
  // const fin = query.get('fin')

  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams()
  let start = Number(searchParams.get('inicio')) || 1
  let end = Number(searchParams.get('fin')) || LIMIT

  const handlePrev = () => {
    setSearchParams(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`)
  }
  const handleNext = () => {
    setSearchParams(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`)
  }

  return (
    <div>
      <h2>Products</h2>
      <p>
        Showing products of <b>{start}</b> to <b>{end}</b>
      </p>
      {start > 20 && <button onClick={handlePrev}>Preview</button>}
      {end < TOTAL_PRODUCTS && <button onClick={handleNext}>Next</button>}
      <hr />
    </div>
  )
}
