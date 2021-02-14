import axios from 'axios';
const KEY = 'AIzaSyBQKbal7r_wCHahfotwW09pGIB0hZz2EQM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
