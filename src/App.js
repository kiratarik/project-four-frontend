import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Navbar from './components/common/Navbar.js'
import Home from './components/common/Home.js'

import Game from './components/games/Game.js'
import Games from './components/games/Games.js'

import User from './components/users/User.js'
import Users from './components/users/Users.js'

import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/games/:gameId">
          <Game />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
