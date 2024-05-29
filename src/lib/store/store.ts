import { configureStore, Middleware, Tuple } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import logger from 'redux-logger';

export const makeStore = () => {
  const isDev = process.env.NODE_ENV !== 'production';
  console.log('isDev:', isDev);
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    devTools: isDev,
    middleware: (getDefaultMiddleware) => {
      let defaultMiddleware = getDefaultMiddleware();
      let middlewareList: Middleware[] = [sagaMiddleware];

      if (isDev) {
        middlewareList.push(logger);
      }

      return defaultMiddleware.concat(...middlewareList);
    },
  });
  console.log('sagaMiddleware.run');
  sagaMiddleware.run(rootSaga);
  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
