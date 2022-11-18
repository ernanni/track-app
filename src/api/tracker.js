import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://c57e-179-251-58-73.ngrok.io' //change this every ngrok run
});

instance.interceptors.request.use(
  //this function will be called on request
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  //this function will be called if there was an error with the request
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;