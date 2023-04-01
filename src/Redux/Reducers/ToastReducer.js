import { TOAST_HIDE, TOAST_SHOW } from '../Actions/ToastAction';

const ToastInintialState = {
  open: false,
  message: '',
  severity: '',
};

export const ToastReducer = (state = ToastInintialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case TOAST_SHOW:
      return {
        open: true,
        message: payload.message,
        severity: payload.severity,
      };

    case TOAST_HIDE:
      return { ...ToastInintialState };

    default:
      return state;
  }
};
