import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://search.outdoorsy.co/rentals',
});

export default instance;
