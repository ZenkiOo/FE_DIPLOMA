import { createAction } from '@reduxjs/toolkit';
import {
  CHANGE_DEPARTURE_FIELD,
  CHANGE_ARRIVAL_FIELD,
  CHANGE_DEPARTURE_DATE_FIELD,
  CHANGE_ARRIVAL_DATE_FIELD,
  CHANGE_FOOTER_FIELD,
  GET_LAST_ROUTES_REQUEST,
  GET_LAST_ROUTES_FAILURE,
  GET_LAST_ROUTES_SUCCESS,
} from './actionsTypes';

// export const changeDepartureInput = createAction(CHANGE_DEPARTURE_FIELD);
// export const changeArrivalInput = createAction(CHANGE_ARRIVAL_FIELD);
// export const changeDeparureDateInput = createAction(CHANGE_DEPARTURE_DATE_FIELD);
// export const changeArrivalDateInput = createAction(CHANGE_ARRIVAL_DATE_FIELD);
// export const changeSubscribeInput = createAction(CHANGE_FOOTER_FIELD);
// export const getLastRoutesRequest = createAction(GET_LAST_ROUTES_REQUEST);
// export const getLastRoutesFailure = createAction(GET_LAST_ROUTES_FAILURE);
// export const getLastRoutesSuccess = createAction(GET_LAST_ROUTES_SUCCESS);
import { getLastRoutesRequest, getLastRoutesSuccess, getLastRoutesFailure } from '../reducers/lastRoutes';

// export const getLastRoutes = () => async (dispatch, getState) => {
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
