import Client from '.';

export const GetAllPosts = async () => {
    try {
        const res = await Client.get(`home`);
        return res.data;
    } catch (error) {
        throw error;
    };
};