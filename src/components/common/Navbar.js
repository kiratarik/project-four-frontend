import { Link } from 'react-router-dom'

function Navbar() {

  const userId = 1

  return (
    <>
      <h1>NavBar</h1>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/users">Users</Link>
      <Link to={`/users/${userId}`}>Home</Link>
      <Link to="/login">Home</Link>
      <Link to="/register">Home</Link>
    </>
  )
}

export default Navbar