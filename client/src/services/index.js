import Axios from 'axios'
import { BASE_URL } from '../globals'

export const PostsClient = Axios.create({ baseURL: `${BASE_URL}` })
export const PlacesClient = Axios.create({ baseURL: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?' })
export const PhotoClient = Axios.create({ baseURL: 'https://maps.googleapis.com/maps/api/place/photo?' })
