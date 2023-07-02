import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => ({
  ...config,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
}));
