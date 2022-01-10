import Client from ".";

export const GetPostComments = async (postId) => {
    try {
        const res = await Client.get(`post/comments/${postId}`);
        return res.data;
    } catch (error) {
        throw error;
    };
};
export const PostComment = async (postId, newComment) => {
    try {
        const res = await Client.post(`post/addcomment/${postId}`, newComment);
        const postComments = await Client.get(`post/comments/${postId}`);
        return postComments.data;
    } catch (error) {
        throw error;
    };
};