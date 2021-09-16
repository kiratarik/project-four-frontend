import React from 'react'
import { useLocation } from 'react-router-dom'

import { getGames } from '../../functionLib/api.js'

function Game() {
  const location = useLocation()
  const [gameData, setGameData] = React.useState({})

  React.useEffect(() => {
    const getData = async () => {
      const res = await getGames()
      const name = location.pathname.split('/games/').join('')
      const game = res.data.filter(game => {
        return (name === game.name)
      })
      if (game.length === 1) {
        setGameData(game[0])
      } 
    }
    getData()
  },[location.pathname])

  return (
    <>
      <h1>Game Detail Page</h1>
      {gameData.name &&
      <div>
        <h2>{gameData.name}</h2>
        <h4>Description:</h4>
        <p>{gameData.description}</p>
        <h4>Rules:</h4>
        <p>{gameData.rules}</p>
        <h4>Image:</h4>
        <img src={gameData.image} style={{ width: '100%' }} />
      </div>
      }
    </>
  )
}

export default Game