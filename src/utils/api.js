import { toast } from 'react-toastify';
import { API, ERR_CODE } from '../settings/constants';
import { getAccessToken, logout } from './auth';

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export function get(endpoint, successCallback, errorCallback) {
  myFetch('GET', endpoint, undefined, successCallback, errorCallback);
}

export function post(endpoint, body, successCallback, errorCallback, exceptErrorCode) {
  myFetch('POST', endpoint, body, successCallback, errorCallback, exceptErrorCode);
}

export function put(endpoint, body, successCallback, errorCallback, exceptErrorCode) {
  myFetch('PUT', endpoint, body, successCallback, errorCallback, exceptErrorCode);
}

export function _delete(endpoint, body, successCallback, errorCallback, exceptErrorCode) {
  myFetch('DELETE', endpoint, body, successCallback, errorCallback, exceptErrorCode);
}

export const alertError = (error) => {
  // eslint-disable-next-line no-alert
  alert(error.code + (error.msg ? `: ${error.msg}` : ''));
};

function myFetch(method, endpoint, body, successCallback, errorCallback, exceptErrorCode) {
  const url = API + endpoint;

  body = JSON.stringify(body);

  const headers = defaultHeaders;
  headers.Authorization = `bearer ${getAccessToken()}`;

  let response = null;

  if (body === undefined)
    response = fetch(url, {
      method,
      headers,
    });
  else {
    response = fetch(url, {
      method,
      headers,
      body,
    });
  }
  handleResponse(response, successCallback, errorCallback, exceptErrorCode);
}

const handleResponse = (response, successCallback, errorCallback, exceptErrorCode) => {
  response.then((r) => {
    if (r.status === 200) {
      if (successCallback) {
        r.json().then((result) => {
          if (result.success) {
            successCallback(result.data);
          } else if (errorCallback) {
            if (result.error.code !== exceptErrorCode) {
              toast.error(result.error.msg.length > 0 ? result.error.msg : getErrorMessage(result.error));
            }
            errorCallback(result.error);
          } else {
            console.log(result.error);
          }
        });
      }
    } else if (r.status === 403) {
      throwError(errorCallback, 'Forbidden');
      toast.error('Forbidden');
    } else if (r.status === 401) {
      console.log('Unauthorized');
      logout();
    } else if (r.status === 500) {
      throwError(null, 'Internal server error');
    } else if (r.status === 502) {
      throwError(null, 'Service unavailable');
    } else if (r.status === 526) {
      throwError(null, 'Please connect to VPN');
    } else {
      errorCallback('Undefined');
    }
  });
};

const getErrorMessage = (error) => {
  if (ERR_CODE[error.code]) {
    return ERR_CODE[error.code];
  }
  return error.msg;
};

const throwError = (errorCallback, message) => {
  if (errorCallback) errorCallback(message);
  else showError(message);
};

// eslint-disable-next-line no-alert
const showError = (message) => alert(`ERR: ${message}`);
