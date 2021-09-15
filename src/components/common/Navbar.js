import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div className='navbar'>
      <div className='navbar-main'>
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/users">Users</Link>
      </div>
      <div className='navbar-login'>
        <Link to={'/profile'}>My Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default Navbar