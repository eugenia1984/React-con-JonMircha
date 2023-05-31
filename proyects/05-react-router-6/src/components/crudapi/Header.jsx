import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = ({id}) => {
  return (
    <header>
      <h2>CRUD API</h2>
      <nav>
        <NavLink
          to="/saints"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Saints
        </NavLink>
        <NavLink
          to="/saints/add"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Add
        </NavLink>
        <NavLink
          to={`/saints/edit/${id}`}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Edit
        </NavLink>
      </nav>
    </header>
  )
}
