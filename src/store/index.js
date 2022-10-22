import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

// import getLastRoutesReduser from '../reducers/getLastRoutes';
import routesSearch from '../reducers/routesSearch'
import subscribe from '../reducers/subscribe'
import lastRoutes from '../reducers/lastRoutes'

const middleware = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
};

const reducer = combineReducers({
  subscribe,
  routesSearch,
  lastRoutes
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
