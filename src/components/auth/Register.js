import { useHistory } from 'react-router-dom'

import { registerUser } from '../../functionLib/api.js'

function Register() {
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    const username = document.querySelector('#username').value
    const email = document.querySelector('#email').value
    const profileImage = document.querySelector('#profile_image').value
    const password = document.querySelector('#password').value
    const passwordConfirmation = document.querySelector('#password_confirmation').value
    const register = { username, email, profileImage, password, passwordConfirmation }
    const registerForm = document.querySelector('#register-form')
    registerForm.classList.remove('form-red')

    const postRegister = async (formData) => {
      try {
        await registerUser(formData)
        registerForm.classList.remove('form-red')
        history.push('/login/')
      } catch (err) {
        registerForm.classList.add('form-red')
      }
    }
    postRegister(register)
  }

  return (
    <>
      <h1>Register</h1>
      <form id='register-form'>
        <label>
          <p>Username: </p>
          <input type='text' id='username' />
        </label>
        <label>
          <p>Email: </p>
          <input type='text' id='email' />
        </label>
        <label>
          <p>Image URL: </p>
          <input type='text' id='profile_image' />
        </label>
        <label>
          <p>Password: </p>
          <input type='password' id='password' />
        </label>
        <label>
          <p>Confirm Password: </p>
          <input type='password' id='password_confirmation' />
        </label>
        <div>
          <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Register