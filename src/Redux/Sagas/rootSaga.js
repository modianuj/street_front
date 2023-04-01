import { all, takeEvery } from 'redux-saga/effects';
import { GET_USER_REQUEST } from '../Actions/AuthActions';
import { TOAST_INIT } from '../Actions/ToastAction';
import { LoginSaga } from './AuthSaga';
import { ToastSaga } from './ToastSaga';

function* rootSagas() {
  yield all([
    takeEvery(GET_USER_REQUEST, LoginSaga),
    takeEvery(TOAST_INIT, ToastSaga),
  ]);
}

export default rootSagas;
