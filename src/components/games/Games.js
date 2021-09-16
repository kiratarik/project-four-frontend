import React from 'react'
import { useHistory } from 'react-router-dom'

import { getGames } from '../../functionLib/api.js'

function Games() {
  const history = useHistory()
  const [gamesData, setGamesData] = React.useState([])
  const [filteredData, setFilteredData] = React.useState([])


  React.useEffect(() => {
    const getData = async () => {
      const res = await getGames()
      setGamesData(res.data)
      setFilteredData(res.data)
    }
    getData()
  },[])

  function cardClick(e) {
    const cardName = e.target.id
    const cardUrl = cardName.split(' ').join('') // Removing ' ' for url
    history.push(`games/${cardUrl}`)
  }

  function handleSearch(e) {
    const search = e.target.value.toLowerCase()
    setFilteredData(gamesData.filter(user => {
      return (user.name.toLowerCase().includes(search))
    }))
  }

  return (
    <>
      <h1>Games</h1>
      <input type='text' placeholder='Search..' onChange={handleSearch}></input>
      <hr/>
      {(filteredData.length > 0) && 
      (<section className='card-section'>
        {filteredData.map(game => {
          return (
            <div key={game.id} 
              id={game.name}
              style={{ backgroundImage: `url('${game.image}')` }}
              onClick={cardClick}
            >
              <h2 id={game.name}>{game.name}</h2>
            </div>
          )
        })}
      </section>)
        
      }
    </>
  )
}

export default Games