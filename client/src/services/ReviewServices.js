import Client from './'

export const GetReviews = async () => {
    try {
        const res = await Client.get('/reviews')
        return res.data.reviews
    } catch (error) {
        throw error
    }
}

export const GetReviewsBYId = async (reviewId) => {
    try {
        const res = await Client.get(`/reviews/${reviewId}`)
        return res.data.reviews
    } catch (error) {
        throw error
    }
}