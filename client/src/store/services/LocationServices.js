import Client from './'

export const RequestAllLocations = async () => {
  const results = await Client.get('/')
  return results.data
}
export const RequestLocationById = async (locationId) => {
  const results = await Client.get(`${locationId}`)
  return results.data
}