import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Redux/Reducers/index';
import rootSagas from './Redux/Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const browserWindow = window;

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: browserWindow.__REDUX_DEVTOOLS_EXTENSION__ && browserWindow.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(rootSagas);

export default store;
