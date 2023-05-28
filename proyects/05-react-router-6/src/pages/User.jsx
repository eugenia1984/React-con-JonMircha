import {useParams} from 'react-router-dom'

export const User = () => {
  const {username} = useParams()

  return (
    <div>
      <h3>User Profile</h3>
      <hr />
      <p>User Name: <b>{username}</b></p>
      <hr />
    </div>
  )
}
