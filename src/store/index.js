import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import { rlyApi } from './api';
import routesSearch from './slices/routesSearch';
import subscribe from './slices/subscribe';
import lastRoutes from './slices/lastRoutes';
import loading from './slices/loading';
import routesParams from './slices/routesParams';

const middleware = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
};

const reducer = combineReducers({
  subscribe,
  routesSearch,
  lastRoutes,
  loading,
  routesParams,
  [rlyApi.reducerPath]: rlyApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware).concat(rlyApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
