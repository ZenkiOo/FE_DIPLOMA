import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  routes: [],
  error: null,
};

const lastRoutes = createSlice({
  name: 'lastRoutes',
  initialState,
  reducers: {
    getLastRoutesFailure: (state, action) => {
      return { ...state, error: action.payload.error };
    },
    getLastRoutesSuccess: (state, action) => {
      return { ...state, routes: action.payload.routes, error: null };
    },
  },
});

const { actions, reducer } = lastRoutes;
export const { getLastRoutesSuccess, getLastRoutesFailure } = actions;
export default reducer;
