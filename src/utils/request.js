import AsyncStorage from '@react-native-community/async-storage';

async function clearAccessToken() {
  return AsyncStorage.removeItem('@appusertoken');
}
async function parseJSON(response) {
  if (response.status === 204 && response.status === 205) {
    return null;
  }
  return response.json();
}

async function handleError(error) {
  let processedErrorResponse;
  try {
    processedErrorResponse = await error.response.json();
  } catch (e) {
    processedErrorResponse = null;
  }
  return {
    status: error && error.response ? error.response.status : null,
    message: error.message,
    response: processedErrorResponse,
  };
}
async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    const error = new Error('caused error 401');
    error.response = response;
    await clearAccessToken();
    throw error;
  }
  if (response.status === 422) {
    const error = new Error('caused error 422');
    error.response = response;
    throw error;
  }
  if (response.status === 500) {
    const error = new Error('caused error 500');
    error.response = response;
    throw error;
  }
  const error = new Error('all general error constant');
  error.response = response;
  throw error;
}

async function getAccessTokenFromAsyncStorage() {
  return AsyncStorage.getItem('@appusertoken');
}
export default async function request(url, options) {
  const updatedOptions = options;
  const accessToken = await getAccessTokenFromAsyncStorage();
  if (accessToken) {
    updatedOptions.headers = {
      ...options.headers,
      'Cache-Control': 'No-Store',
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(handleError);
}
