import React from 'react'
import { useHistory } from 'react-router-dom'

import { showUsers } from '../../functionLib/api.js'

function Users() {
  const history = useHistory()
  const [usersData, setUsersData] = React.useState([])
  const [filteredData, setFilteredData] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await showUsers()
      console.log(res.data)
      setUsersData(res.data)
      setFilteredData(res.data)
    }
    getData()
  },[])

  function cardClick(e) {
    const cardName = e.target.id
    const cardUrl = cardName.split(' ').join('') // Removing ' ' for url
    console.log(cardName,cardUrl)
    history.push(`users/${cardUrl}`)
  }

  function handleSearch(e) {
    console.log(e.target.value)
    const search = e.target.value.toLowerCase()
    setFilteredData(usersData.filter(user => {
      return (user.username.toLowerCase().includes(search))
    }))
  }

  return (
    <>
      <h1>Users Page</h1>
      <input type='text' placeholder='Search..' onChange={handleSearch}></input>
      <hr/>
      {(filteredData.length > 0) && 
      (<section className='card-section'>
        {filteredData.map(user => {
          return (
            <div key={user.pk} 
              id={user.pk}
              style={{ backgroundImage: `url('${user.profileImage}')` }}
              onClick={cardClick}
            >
              <h2 id={user.pk}>{user.username}</h2>
            </div>
          )
        })}
      </section>)
        
      }
    </>
  )
}

export default Users