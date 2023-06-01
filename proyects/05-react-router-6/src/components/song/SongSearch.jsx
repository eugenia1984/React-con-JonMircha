import { useState, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { SongForm } from './SongForm.jsx'
import { SongDetails } from './SongDetails'
import { Loader } from '../Loader.jsx'
import { helptHttp } from '../../helper/helphttp.js'
import { SongHeader } from './SongHeader.jsx'
import { SongTable } from './SongTable.jsx'

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

      setLoading(false)
      setBio(artistRes)
      setLyric(songRes)
    }
    fetchData()

    localStorage.setItem('mySongs', JSON.stringify(mySongs))
  }, [search, mySongs])

  const handleSearch = (data) => {
    setSearch(data)
  }

  const handleSaveSong = () => {
    alert('Saving song in my favorites')
  }

  const handleDeleteSong = (id) => {
    alert(`Deleting song width id: ${id}`)
  }

  return (
    <div>
      <HashRouter>
        <SongHeader />
        {loading && <Loader />}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div>
                    <SongForm
                      handleSearch={handleSearch}
                      handleSaveSong={handleSaveSong}
                      bio={bio}
                      lyric={lyric}
                    />
                  </div>
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  <div>
                    {search && !loading && (
                      <SongDetails search={search} lyric={lyric} bio={bio} />
                    )}
                  </div>
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
