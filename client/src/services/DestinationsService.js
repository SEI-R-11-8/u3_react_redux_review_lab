import Client from ".";

export const GetDestinations = async () => {
    try{
        const res = await Client.get(`/posts`)
        return res.data.posts
    }catch (error){
        throw error
    }
}

export const GetDestinationDetails = async (id) => {
    try{
        const res = await Client.get(`/posts/${id}`)
        return res.data.post
    } catch(error){
        throw error
    }
}

export const GetComments = async () => {
    try{
        const res = await Client.get(`/comments`)
        return res.data.comments
    }catch(error){
        throw error
    }
}

export const CreateComment = async (com) => {
    try{
        await Client.post(`/comments`, com)
    }catch(error){
        throw error
    }
}