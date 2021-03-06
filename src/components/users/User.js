import React from 'react'
import { useLocation } from 'react-router-dom'

import { showUsers } from '../../functionLib/api.js'

function User() {
  const location = useLocation()
  const [userData, setUserData] = React.useState({})

  React.useEffect(() => {
    const getData = async () => {
      const res = await showUsers()
      const id = location.pathname.split('/users/').join('')
      const user = res.data.filter(user => {
        return (id === user.pk.toString())
      })
      if (user.length === 1) {
        setUserData(user[0])
      } 
    }
    getData()
  },[location.pathname])

  return (
    <>
      <h1>User Details</h1>
      {userData.username &&
      <div>
        <h2>{userData.username}</h2>
        <img src={userData.profileImage} style={{ width: '100%' }} />
      </div>
      }
    </>
  )
}

export default User