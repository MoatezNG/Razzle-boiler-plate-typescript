import axios from 'axios';

const CLIENT_API = `${process.env.RAZZLE_REACT_APP_HOST}:${process.env.PORT}${process.env.RAZZLE_API_PREFIX}`;

export const clientApi = axios.create({
  baseURL: CLIENT_API,
});
