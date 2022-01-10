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
        return res.data.destination
    } catch (error) {
        throw error
    }
}

// export const CreateDestination = async () => {
//     try {
//         const res = await Client.post(`/destinations/${destinationId}`)
//         return res.data.destinations
//     } catch (error) {
//         throw error
//     }
// }

// export const DeleteDestination = async () => {
//     try {
//         const res = await Client.delete(`/destinations/${destinationId}`)
//         return res.data.destinations
//     } catch (error) {
//         throw error
//     }
// }
