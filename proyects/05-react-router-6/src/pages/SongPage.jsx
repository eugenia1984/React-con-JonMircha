import React from 'react'
import { SongDetails } from '../components/song/SongDetails'
import { useParams } from 'react-router-dom'

export const SongPage = ({ mySongs }) => {
  let { id } = useParams()
  let currentSong = mySongs[id]
  let { search, lyric, bio } = currentSong

  return <SongDetails search={search} lyric={lyric} bio={bio} />
}
