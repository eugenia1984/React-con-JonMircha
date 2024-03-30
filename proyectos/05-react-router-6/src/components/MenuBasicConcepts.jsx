import { Link, NavLink } from 'react-router-dom'

export const MenuBasicConcepts = () => {
  const ROUTES = [
    { to: '/', name: 'Home' },
    { to: '/about', name: 'About' },
    { to: '/contact', name: 'Contact' },
    { to: '/user/pipi', name: 'Pipi' },
    { to: '/user/kenai', name: 'Kenai' },
    { to: '/products', name: 'Products' },
    {to: '/react-topics', name: 'React Topics'}
  ]
  return (
    <nav>
      {/* Ejemplo con LINK*/}
      {/* <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>   */}
      {/* Ejemplo con NavLink*/}
      {ROUTES.map((route) => (
        <NavLink
          key={route.name}
          to={route.to}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {route.name}
        </NavLink>
      ))}
      <NavLink
          to='/login'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Login
        </NavLink>
        <NavLink
          to='/dashboard'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Dashboard
        </NavLink>
    </nav>
  )
}
