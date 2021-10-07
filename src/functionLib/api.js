import axios from 'axios'
import { getToken, removeToken } from './auth.js'
import { baseUrl } from '../config.js'

function getHeaders(){
  const token = getToken()
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}

// Game requests

export function getGames() {
  return axios.get(`${baseUrl}/games/`)
}


// User requests

export function registerUser(formData){
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export function loginUser(formData){
  removeToken()
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

export function profileUser(){
  return axios.get(`${baseUrl}/auth/profile/`, getHeaders())
}

export function showUsers(){
  return axios.get(`${baseUrl}/auth/users/`)
}


