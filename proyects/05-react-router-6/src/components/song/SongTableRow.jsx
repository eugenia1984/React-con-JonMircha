import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SongTableRow = ({ id, el, handleDeleteSong }) => {
  const navigate = useNavigate()
  
  return (
    <tr>
      <td>
        <img src="https://placeimg.com/40/40/animals" alt="animal" />
      </td>
      <td>Artist name</td>
      <td>Song name</td>
      <td>
        <button onClick={() => navigate(`/canciones/${id}`)}>See</button>
        <buuton onClick={handleDeleteSong(id)}>Delete</buuton>
      </td>
    </tr>
  )
}
