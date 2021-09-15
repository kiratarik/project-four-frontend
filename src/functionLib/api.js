import axios from 'axios'
import { getToken, removeToken } from './auth.js'

const baseURL = '/api'

function getHeaders(){
  const token = getToken()
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}

// Game requests

export function getGames() {
  return axios.get(`${baseURL}/games/`)
}


// User requests

export function registerUser(formData){
  return axios.post(`${baseURL}/auth/register/`, formData)
}

export function loginUser(formData){
  removeToken()
  return axios.post(`${baseURL}/auth/login/`, formData)
}

export function profileUser(){
  return axios.get(`${baseURL}/auth/profile/`, getHeaders())
}

export function showUsers(){
  return axios.get(`${baseURL}/auth/users/`)
}


