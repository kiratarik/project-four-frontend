import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { showUsers } from '../../functionLib/api.js'

function Users() {
  const history = useHistory()
  const location = useLocation()
  const [usersData, setUsersData] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await showUsers()
      console.log(res.data)
      setUsersData(res.data)
    }
    getData()
  },[])

  function cardClick(e) {
    const cardName = e.target.id
    const cardUrl = cardName.split(' ').join('') // Removing ' ' for url
    history.push(`${location.pathname}/${cardUrl}`)
  }

  return (
    <>
      <h1>Users Page</h1>
      {(usersData.length > 0) && 
      (<section className='card-section'>
        {usersData.map(user => {
          return (
            <div key={user.id} 
              id={user.id}
              style={{ backgroundImage: `url('${user.profileImage}')` }}
              onClick={cardClick}
            >
              <h2>{user.username}</h2>
            </div>
          )
        })}
      </section>)
        
      }
    </>
  )
}

export default Users