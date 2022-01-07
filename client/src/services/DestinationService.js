import Client from './index'

export const GetDestinations = async () => {
    try {
        const response = await Client.get('/destinations')
        return response.data
    } catch (error) {
        throw error
    }
}