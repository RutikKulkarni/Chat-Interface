import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8082/api' // Change this to your backend URL
});

export default instance;
