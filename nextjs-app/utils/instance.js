import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://search.outdoorsy.co/rentals',
  // baseURL: 'https://odc-search-staging.herokuapp.com/rentals',
});

export default instance;
