import { SongArtist } from './SongArtist'
import { SongLyric } from './SongLyric'
import { Message } from '../Message'

export const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null

  return (
    <>
      {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
        <Message
          msg={`Error: the song "<em>${search.song}</em>" was not found`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics}/>
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: the artist '<em>${search.artist}</em>' was not found`}
          bgColor="#dc3545"
        />
      )}
    </>
  )
}
