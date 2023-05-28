import { useParams, useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../utils/constants'

const ProductDetail = () => {

  const getProduct = (id) => {
    return PRODUCTS.find(product => product.id.toString() === id )
  }

  const handleBack = () => {
    navigate(-1)
  }

  const navigate = useNavigate()
  const {id} = useParams()

  const product = getProduct(id)
  
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
