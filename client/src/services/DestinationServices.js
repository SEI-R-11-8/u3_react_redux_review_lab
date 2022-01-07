import Client from './'

export const GetDestinations = async () => {
    try {
        const res = await Client.get('/destinations')
        return res.data.destinations
    } catch (error) {
        throw error
    }
}

export const GetDestinationsBYID = async (destinationId) => {
    try {
        const res = await Client.get(`/destinations/${destinationId}`)
        return res.data.destinations
    } catch (error) {
        throw error
    }
}