import { configureStore } from '@reduxjs/toolkit';
import routesSearchReducer from '../reducers/routesSearch';
import subscribeReduser from '../reducers/subscribe';

const middleware = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
};

const store = configureStore({
  reducer: { searchForm: routesSearchReducer, footerForm: subscribeReduser },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
