import { useHistory } from 'react-router-dom'

import { loginUser } from '../../functionLib/api.js'
import { setToken } from '../../functionLib/auth.js'

import React from 'react'

function Login() {
  const history = useHistory()
  
  function handleSubmit(e) {
    e.preventDefault()
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const loginForm = document.querySelector('#login-form')
    loginForm.classList.remove('form-red')
    const login = { username, password }

    const postLogin = async (formData) => {
      try {
        const res = await loginUser(formData)
        setToken(res.data.token)
        loginForm.classList.remove('form-red')
        history.push('/profile')
      } catch (err) {
        loginForm.classList.add('form-red')
      }
    }
    postLogin(login)
  }

  return (
    <>
      <h1>Login Page</h1>
      <form id='login-form'>
        <label>
          <p>Username: </p>
          <input type='text' id='username' />
        </label>
        <label>
          <p>Password: </p>
          <input type='password' id='password' />
        </label>
        <div>
          <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Login