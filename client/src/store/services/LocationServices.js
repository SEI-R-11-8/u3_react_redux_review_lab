import Client from './'

export const RequestAllLocations = async () => {
  const results = await Client.get('/')
  return results.data
}