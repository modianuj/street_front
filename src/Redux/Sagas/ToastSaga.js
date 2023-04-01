import { put } from 'redux-saga/effects';
import { TOAST_HIDE, TOAST_SHOW } from '../Actions/ToastAction';

export function* ToastSaga(action) {
  try {
    if (action.payload.hide) {
      yield put({ type: TOAST_HIDE });
    } else {
      yield put({ type: TOAST_SHOW, payload: action.payload });
    }
  } catch (e) {
    return yield put({ type: TOAST_HIDE });
  }
}
