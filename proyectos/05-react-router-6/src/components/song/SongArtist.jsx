import './SongArtist.css'
export const SongArtist = ({ artist }) => {
  return (
    <section className="artist">
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        <strong>Born year:</strong> {artist.intBornYear} - {artist.intDiedYear || 'Present'}
      </p>
      <p><strong>Country:</strong> {artist.strCountry}</p>
      <p>
        <strong>Genre:</strong> {artist.strGenre} - <strong>Style:</strong> {artist.strStyle}
      </p>
      <h4>Biography:</h4>
      <p>{artist.strBiographyEN}</p>
    </section>
  )
}
