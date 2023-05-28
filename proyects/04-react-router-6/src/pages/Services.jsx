import { Link, Outlet } from "react-router-dom"

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <nav className="menu">
        <Link to="/services">Services</Link>
        <Link to="/services/list">List</Link>
        <Link to="/services/guarantee">Guarantee</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default Services
