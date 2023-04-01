import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { LoginAction } from '../../../Redux/Actions/AuthActions';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      email: yup
        .string()
        .required('Please Enter email')
        .email()
        .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'please enter valid email'),
      password: yup
        .string()
        .required('Please Enter Password')
        .min(3, 'characters must be more than 3')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          'Password must have 8 characters,1 special character,1 UpperCase letter,1 LowerCase letter'
        ),
    }),
    onSubmit: (values) => {
      const payload = {
        email: formik.values.email,
        password: formik.values.password,
      };
      dispatch(LoginAction(payload));
      navigate('/dashboard', { replace: true });
      // setMsgConfig({
      //   alertOpen: true,
      //   message: 'Welcome to ONCIO!',
      //   severity: 'success',
      //   autoHideDuration: 2000,
      // });
    },
  });
  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={formik.handleSubmit}>
        Login
      </LoadingButton>
    </>
  );
}
