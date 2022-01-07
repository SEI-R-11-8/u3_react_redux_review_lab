import Client from '.';

export const GetAllPosts = async () => {
    try {
        const res = await Client.get(`home`);
        return res.data;
    } catch (error) {
        throw error;
    };
};
export const GetPostById = async (id) => {
    try {
        const res = await Client.get(`post/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    };
};
export const AddPostLike = async (postId) => {
    try {
        const res = await Client.put(`post/addpostlike/${postId}`);
        return res.data;
    } catch (error) {
        throw error;
    };
};