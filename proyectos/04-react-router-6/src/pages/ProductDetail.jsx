import { useParams, useNavigate } from 'react-router-dom'

const ProductDetail = ({ products }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const handleBack = () => navigate(-1)
  const product = products.find((product) => product.id.toString() === id)

  return (
    <section>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <h3>id: {product.id}</h3>
      <h4>Price: $ {product.price}</h4>
      <button onClick={handleBack}>Back</button>
    </section>
  )
}

export default ProductDetail
