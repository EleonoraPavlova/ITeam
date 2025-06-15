import axios from 'axios'

export const rapidapi = axios.create({
  baseURL: 'https://jsearch.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY ?? '',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  },
})
