import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';

// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import Toast from './components/toast/Toast';

// ----------------------------------------------------------------------

export default function App() {
  const ToastState = useSelector((state) => state.Toast);
  const { isMenuActive } = useSelector((state) => state.Auth);
  return (
    <HelmetProvider>
      <div className={isMenuActive && 'menuActive'}>
        <BrowserRouter>
          <Toast
            open={ToastState.open}
            message={ToastState.message}
            severity={ToastState.severity}
          />
          <ThemeProvider>
            <ScrollToTop />
            <StyledChart />
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}
