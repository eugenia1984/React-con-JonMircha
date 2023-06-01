import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SongTableRow = ({ id, el, handleDeleteSong }) => {
  const { bio, search } = el
  let avatar = bio.artist[0].strArtistThumb
  let avatarStyles = {
    width: 'auto',
    height: '40px'
  }
  const navigate = useNavigate()

  return (
    <tr>
      <td>
        <img src={avatar} alt={search.artist} style={avatarStyles} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => navigate(`/${id}`)}>See</button>
        <buuton onClick={handleDeleteSong(id)}>Delete</buuton>
      </td>
    </tr>
  )
}
