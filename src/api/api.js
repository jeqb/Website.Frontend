import axios from 'axios';
import { history } from '../index.js';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

/*
axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('jwt');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config
}, error => {
  return Promise.reject(error)
})
*/

// TODO: add the badrequest, unauthorized, notfound, internalservererror pages
/*
axios.interceptors.response.use(undefined, error => {
  console.log(error);
  // backend is down for sure
  if(error.message === "Network Error"){
    history.push('/InternalServerError');
  }

  // backend is alive and we got a status code.
  const { status } = error.response;

  if(status === 400) {
    history.push('/badrequest');
  }

  if(status === 401) {
    history.push('/Unauthorized');
  }

  if(status === 404) {
    history.push('/NotFound');
  }

  if(status >= 500) {
    history.push('/InternalServerError');
  }

});
*/

const responseBody = (response) => response

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody)
};

const Message = {
  list: () => requests.get('/Message'),
  details: (id) => requests.get(`/Message/${id}`),
  create: (message) => requests.post('/Message', message),
  delete: (id) => requests.delete(`/Message/${id}`)
}

export default {
  Message
}