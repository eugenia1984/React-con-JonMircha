import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to="/products"
        >
          Products
        </NavLink>
        <Link to="/not-found">Error 404</Link>
      </nav>
    </div>
  )
}

export default Menu
