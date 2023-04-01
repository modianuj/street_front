import { GET_USER_REQUEST , GET_USER_FOUND ,GET_USER_NOT_FOUND } from '../Actions/AuthActions';

const LoginInitialState = {
  loading: false,
    user: {},
    currentAction: 'INIT',
    token: '',
    redirect: '',
    success: false,
  
};

export const AuthReducer = (state = LoginInitialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        currentAction: action.type,
      };
      case GET_USER_FOUND:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userData', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        loading: false,
        currentAction: action.type,
        token: action.payload.token,
      };
      case GET_USER_NOT_FOUND:
      return { ...state, user: '', loading: false };
      default:
        return state;
  }
};
