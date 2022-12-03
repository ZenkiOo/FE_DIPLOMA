import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import { rlyApi } from './api';
import subscribe from './slices/subscribe';
import routesParams from './slices/routesParams';
import passengers from './slices/passengers';

const middleware = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
};

const reducer = combineReducers({
  subscribe,
  routesParams,
  passengers,
  [rlyApi.reducerPath]: rlyApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middleware).concat(rlyApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
