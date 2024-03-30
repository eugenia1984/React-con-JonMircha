const Authorized = () => {
  const auth = true

  return (
    <>
      <p>Conditional rendering: {auth ? 'The user is logged' : 'The user is not logged'}</p>
      <hr />
    </>
  )
}

export default Authorized 