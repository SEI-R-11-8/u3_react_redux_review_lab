import Client from './'

export const GetPosts = async () => {
    try {
        const res = await Client.get('/posts')
        return res.data.posts
    } catch (error) {
        throw error
    }
}

export const GetPostsById = async () => {
    try {
        const res = await Client.get('/posts:id')
        return res.data
    } catch (error) {
        throw error
    }
}