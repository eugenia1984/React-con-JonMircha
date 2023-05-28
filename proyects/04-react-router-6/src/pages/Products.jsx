import { Link } from 'react-router-dom'

const Products = ({products}) => {

  return (
    <section>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name} </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Products
