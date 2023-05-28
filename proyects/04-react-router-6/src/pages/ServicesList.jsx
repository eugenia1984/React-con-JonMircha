import { Link } from 'react-router-dom'

const ServicesList = ({services}) => {
  return (
    <div>
      <h2>Services List</h2>
      <hr />
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesList
