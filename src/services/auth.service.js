import axios from 'axios';
import { AUTH_API_URL } from '../constants/common.constant';

export function register(payload) {
  const { username, password, confirmPassword } = payload;
  return axios({
    method: 'post',
    url: `${AUTH_API_URL}/register`,
    data: { username, password, confirmPassword },
    config: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
}

export function login(payload) {
  const { username, password } = payload;
  return axios({
    method: 'post',
    url: `${AUTH_API_URL}/login`,
    data: { username, password },
    config: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
}
