import axios from 'axios';
const backend_url = process.env.NEXT_PUBLIC_BE_URL ?? 'http://localhost:3001';

const backendApi = axios.create({
  baseURL: backend_url + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  timeoutErrorMessage: 'Request Time Out',
});


export default backendApi
