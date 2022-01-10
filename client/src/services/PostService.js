import Client from './'

export const GetPosts = async () => {
    try {
        const res = await Client.get('/posts')
        return res.data.posts
    } catch (error) {
        throw error
    }
}

export const GetPostsById = async (id) => {
    try {
        const res = await Client.get(`/posts/${id}`)
        return res.data.posts
    } catch (error) {
        throw error
    }
}

export const NewPost = async (newPost) => {
    try {
        const res = await Client.post(`/posts`, newPost)
        return res.data.posts
    } catch (error) {
        throw error
    }
}

export const UpdatePost = async (updatedPost) => {
    try {
        const res = await Client.put(`/posts/${updatedPost._id}`, updatedPost)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeletePost = async (deletePost) => {
    try {
        const res = await Client.delete(`/posts/${deletePost._id}`, deletePost)
        return res.data
    } catch (error) {
        throw error
    }
}