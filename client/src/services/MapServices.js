import { PlacesClient, PhotoClient } from "./index"
import axios from "axios";

// TODO
// Getting 'Invalid Request' errors back from the maps api when using the Client imports
// Using standard axios calls until a solution is found

export const GetPhotoReference = async (searchTerm) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchTerm}&key=${process.env.REACT_APP_MAPS_API_KEY}&inputtype=textquery&fields=photos`)
    return response.data.candidates[0].photos[0].photo_reference
  } catch (error) {
    throw error
  }
}

export const GetPhotoByReference = async (photoRef) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&key=${process.env.REACT_APP_MAPS_API_KEY}&maxwidth=800&maxheight=800`)
    return response.request.responseURL
  } catch (error) {
    throw error
  }
}