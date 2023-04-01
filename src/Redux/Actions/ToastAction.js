export const TOAST_INIT = 'TOAST_INIT';
export const TOAST_SHOW = 'TOAST_SHOW';
export const TOAST_HIDE = 'TOAST_HIDE';

export const ToastAction = (data) => {
  return { type: TOAST_INIT, payload: data };
};
