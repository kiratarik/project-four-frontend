import React from 'react'

import { profileUser } from '../../functionLib/api.js'

function Profile() {
  const [profileData, setProfileData] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await profileUser()
      console.log(res.data)
      setProfileData(res.data)
    }
    getData()
  },[])

  return (
    <>
      <h1>Profile Page</h1>
      <h2>Username: {profileData.username}</h2>
      <h3>Email: {profileData.email}</h3>
      <img src={profileData.profileImage} style={{ width: '100%' }} />
    </>
  )
}

export default Profile