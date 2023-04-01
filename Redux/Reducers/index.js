import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { ToastReducer } from './ToastReducer';

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Toast: ToastReducer,
});

export default rootReducer;
