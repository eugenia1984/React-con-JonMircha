import React from 'react'
import { Link } from 'react-router-dom'

export const SongHeader = () => {
  return (
    <header style={{padding: '1.5rem 0rem'}}>
      <h2>SONG SEARCH</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  )
}
