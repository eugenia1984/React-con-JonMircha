import { Link, NavLink } from 'react-router-dom'

export const MenuBasicConcepts = () => {
  return (
    <nav>
      {/* Ejemplo con LINK*/}
      {/* <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>   */}
      {/* Ejemplo con NavLink*/}
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink> 
      <NavLink 
        to="/about"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        About
      </NavLink>
      <NavLink 
        to="/contact"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Contact
      </NavLink>  
    </nav>
  )
}
