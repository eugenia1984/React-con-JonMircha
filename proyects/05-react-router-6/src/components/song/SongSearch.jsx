import { useState, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { SongForm } from './SongForm.jsx'
import { SongDetails } from './SongDetails'
import { Loader } from '../Loader.jsx'
import { helptHttp } from '../../helper/helphttp.js'
import { SongHeader } from './SongHeader.jsx'

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || []

export const SongSearch = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mySongs, setMySongs] = useState(mySongsInit)

  useEffect(() => {
    // para evitar renderizados innecesarios
    if (search === null) return

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

    localStorage.setItem("mySongs", JSON.stringify(mySongs))
  }, [search, mySongs])

  const handleSearch = (data) => {
    setSearch(data)
  }

  return (
    <div>
      <HashRouter>
        <SongHeader />
        {loading && <Loader />}
        <article className="grid-1-3">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SongForm handleSearch={handleSearch} />
                  <h2>Song table</h2>
                  {search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />
            <Route
              path="/:id"
              element={
                <>
                  <h2>Song page</h2>
                </>
              }
            />
            <Route path="*" element={<h2>Ups...</h2>} />
          </Routes>
        </article>
      </HashRouter>
    </div>
  )
}
