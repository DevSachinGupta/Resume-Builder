import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:2000/',
  withCredentials: true,
});

export default apiClient;
