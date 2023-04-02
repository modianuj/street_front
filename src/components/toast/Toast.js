/**
 *
 * This is Toast component which is already define in app.tsx file
 * and this component will manage by ToastReducer,ToastAction,ToastSaga.
 *
 */

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { ToastAction } from '../../Redux/Actions/ToastAction';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = (props) => {
  const dispatch = useDispatch();
  const { open, severity, message } = props;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(ToastAction({ hide: true }));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
