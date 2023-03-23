import { BASE_URL } from './constants.js';
import { Method } from './constants.js';
import { ErrorText } from './constants.js';

const load = async (route, errorText, method = Method.GET, body = null) => {
  const response = await fetch(BASE_URL + route, { method, body });
  if (!response.ok) {
    throw new Error(errorText);
  }
  return response.json();
};

const getData = async (route) => load(route, ErrorText.GET_DATA);

const sendData = async (route, body) => load(route, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };
