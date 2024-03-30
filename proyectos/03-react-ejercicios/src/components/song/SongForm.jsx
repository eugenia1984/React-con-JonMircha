import { useState } from 'react'

const initialForm = {
  artist: '',
  song: ''
}
export const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.artist || !form.song) {
      alert('Missing information for the search')
    }

    handleSearch(form)
    setForm(initialForm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Artist name..."
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Song name..."
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
