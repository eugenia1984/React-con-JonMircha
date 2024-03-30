import { useState, useEffect } from 'react'
import { SongForm } from './SongForm.jsx'
import { SongDetails } from './SongDetails'
import { Loader } from '../Loader.jsx'
import { helptHttp } from '../../helper/helphttp.js'

export const SongSearch = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search === null) return // para evitar renderizados innecesarios
    const fetchData = async () => {
      const { artist, song } = search
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

      setLoading(true)
      const [artistRes, songRes] = await Promise.all([
        helptHttp().get(artistUrl),
        helptHttp().get(songUrl)
      ])
      console.log('artistRes: ', artistRes, ', songRes: ', songRes)
      setLoading(false)
      setBio(artistRes)
      setLyric(songRes)
    }
    fetchData()
  }, [search])

  const handleSearch = (data) => {
    setSearch(data)
  }

  return (
    <div>
      <h2>SONG SEARCH</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
    </div>
  )
}
