// import { createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import {
//   getLastRoutesRequest,
//   getLastRoutesFailure,
//   getLastRoutesSuccess,
// } from '../actions/actionsCreators';

const initialState = {
  routes: [],
  loading: false,
  error: null,
};

const lastRoutes = createSlice({
  name: 'lastRoutes',
  initialState,
  reducers: {
    getLastRoutesRequest: (state, action) => {
      return { ...state, loading: true };
    },
    getLastRoutesFailure: (state, action) => {
      return { ...state, error: action.payload.error };
    },
    getLastRoutesSuccess: (state, action) => {
      return { ...state, routes: action.payload.routes, loading: false };
    },
  },
});

const { actions, reducer } = lastRoutes;
export const {
  getLastRoutesRequest,
  getLastRoutesSuccess,
  getLastRoutesFailure,
} = actions;

// export const getLastRoutesFetch = () => async (dispatch, getState) => {
//   dispatch(getLastRoutesRequest());

//   try {
//     const response = await fetch(
//       'https://netology-trainbooking.netoservices.ru/routes/last'
//     );

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const routes = await response.json();
//     dispatch(getLastRoutesSuccess({ routes }));
//   } catch (error) {
//     const { message } = error;
//     dispatch(getLastRoutesFailure({ message }));
//   }
// };

export default reducer;
