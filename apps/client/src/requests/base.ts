import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

instance.interceptors.response.use((response) => {
  return response.data;
});
