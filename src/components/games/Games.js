import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { getGames } from '../../functionLib/api.js'

function Games() {
  const history = useHistory()
  const location = useLocation()
  const [gamesData, setGamesData] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await getGames()
      console.log(res.data)
      setGamesData(res.data)
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
      <h1>Games Page</h1>
      {(gamesData.length > 0) && 
      (<section className='card-section'>
        {gamesData.map(game => {
          return (
            <div key={game.id} 
              id={game.name}
              style={{ backgroundImage: `url('${game.image}')` }}
              onClick={cardClick}
            >
              <h2>{game.name}</h2>
            </div>
          )
        })}
      </section>)
        
      }
    </>
  )
}

export default Games