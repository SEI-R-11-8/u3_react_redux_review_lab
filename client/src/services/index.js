import axios from "axios";

const Client = axios.create({ baseURL: "http://localhost:3001/api/cities" });

export default Client;
