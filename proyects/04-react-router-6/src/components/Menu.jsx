import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Menu
