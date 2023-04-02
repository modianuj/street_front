import { put, call } from 'redux-saga/effects';
import axios from '../../axiosConfig';
import {
  GET_USER_FOUND,
  GET_USER_NOT_FOUND,
  GET_USER_REQUEST,
} from '../Actions/AuthActions';

import { TOAST_SHOW } from '../Actions/ToastAction';

export function* LoginSaga(action) {
  try {
    const response = yield call(axios.post, `/user/login`, action.payload);
    console.log(response, 'res');
    const { success, data, message, errors } = response?.data;
    const token = response.data.data.token;
    localStorage.setItem('token', token);
    yield put({ type: GET_USER_FOUND, payload: data });
    yield put({
      type: TOAST_SHOW,
      payload: { message: message, severity: 'success' },
    });
  } catch (e) {
    yield put({ type: GET_USER_NOT_FOUND });
    return yield put({
      type: TOAST_SHOW,
      payload: {
        message: e.response.data.message,
        severity: 'error',
      },
    });
  }
}
