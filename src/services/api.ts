import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/jeffubayi/tokea',
});

export default api;
