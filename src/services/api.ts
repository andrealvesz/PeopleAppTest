import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  //   baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Client-ID cODuN4eYqHQXlgZz-pcWm7Ood-sK4gE25_PVzSMMhBU',
    // Authorization: Config.AUTHORIZATION,
  },
});

export default api;
