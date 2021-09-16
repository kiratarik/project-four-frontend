import React from 'react'
import { Link } from 'react-router-dom'

import { isAuthenticated, removeToken } from '../../functionLib/auth.js'

function Navbar() {
  const [loggedIn, setLoggedIn] = React.useState(false)

  React.useEffect(() => {
    setLoggedIn(isAuthenticated())
  },[])

  function handleLogOut() {
    removeToken()
    setLoggedIn(false)
  }

  return (
    <div className='navbar'>
      <div className='navbar-main'>
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/users">Users</Link>
      </div>
      <div className='navbar-login'>
        {loggedIn && 
        <>
          <Link to='/profile'>My Profile</Link>
          <Link to='' onClick={handleLogOut}>Log Out</Link>
        </>
        }
        {!loggedIn && 
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        }
      </div>
    </div>
  )
}

export default Navbar