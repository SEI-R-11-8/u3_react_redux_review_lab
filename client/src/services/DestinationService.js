import Client from './';

export const GetDestinations = async () => {
	try {
		const res = await Client.get('/destinations');
		console.log(res.data.destinations);
		return res.data.destinations;
	} catch (error) {
		throw error;
	}
};
