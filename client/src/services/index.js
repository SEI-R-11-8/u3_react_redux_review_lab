import Axios from 'axios';

const Client = Axios.create({ baseURL: 'httpl://localhost:3001/api' });

export default Client;
