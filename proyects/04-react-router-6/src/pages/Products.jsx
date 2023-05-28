import { Link } from 'react-router-dom'
import { PRODUCTS } from '../utils/constants'

const Products = () => {

  return (
    <section>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name} </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Products
