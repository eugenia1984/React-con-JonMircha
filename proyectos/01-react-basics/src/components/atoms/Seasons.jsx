const Seasons = () => {
  const seasons = ['Spring', 'Summer', 'Autumn', 'Winter']

  return (
    <>
      <p>Seasons (rendering the elements of an array):</p>
      <ul className="ul-none">
        {seasons.map((el) => (
          <li key={el}>- {el}</li>
        ))}
      </ul>
      <hr />
    </>
  )
}

export default Seasons
