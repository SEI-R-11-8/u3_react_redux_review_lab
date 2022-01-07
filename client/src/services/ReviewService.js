import Client from ".";

export const GetPostReviews = async (postId) => {
    try {
        const res = await Client.get(`post/reviews/${postId}`);
        return res.data;
    } catch (error) {
        throw error;
    };
};