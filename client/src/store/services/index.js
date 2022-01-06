import axios from 'axios'

const Client = axios.create({ baseURL: 'http://localhost:3001/api/location'})

export default Client