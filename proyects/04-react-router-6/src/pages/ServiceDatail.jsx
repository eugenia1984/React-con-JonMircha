import { useParams } from 'react-router-dom'

const ServiceDetail = ({ services }) => {
  const { id } = useParams()
  const service = services.find((service) => service.id.toString() === id)

  return (
    <section>
      <hr />
      <h2>Service Detail</h2>
      <hr />
      <h3>{service.name}</h3>
      <h4>id: {service.id}</h4>
      <h5>Price: $ {service.price}</h5>
    </section>
  )
}

export default ServiceDetail
