export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_FOUND = 'GET_USER_FOUND';
export const GET_USER_NOT_FOUND = 'GET_USER_NOT_FOUND';

export const LoginAction = (data) => {
  return { type: GET_USER_REQUEST, payload: data };
};
