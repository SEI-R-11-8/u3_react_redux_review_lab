import Client from ".";

export const GetPostComments = async (postId) => {
    try {
        const res = await Client.get(`post/comments/${postId}`);
        return res.data;
    } catch (error) {
        throw error;
    };
};