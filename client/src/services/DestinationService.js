import Client from './index'

export const GetDestinations = async () => {
    try {
        const response = await Client.get('/destinations')
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetDestinationById = async (destinationId) => {
    try {
        const response = await Client.get(`/destinations/${destinationId}`)
        return response.data
    } catch (error) {
        throw error
    }
}