import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://8.134.133.176/api',
  timeout: 50000 
});

export default instance;