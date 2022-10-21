import { createAction } from '@reduxjs/toolkit';
import {
  CHANGE_DEPARTURE_FIELD,
  CHANGE_ARRIVAL_FIELD,
  CHANGE_DEPARTURE_DATE_FIELD,
  CHANGE_ARRIVAL_DATE_FIELD,
  CHANGE_FOOTER_FIELD,
} from './actionsTypes';

export const changeDepartureInput = createAction(CHANGE_DEPARTURE_FIELD);
export const changeArrivalInput = createAction(CHANGE_ARRIVAL_FIELD);
export const changeDeparureDateInput = createAction(CHANGE_DEPARTURE_DATE_FIELD);
export const changeArrivalDateInput = createAction(CHANGE_ARRIVAL_DATE_FIELD);
export const changeSubscribeInput = createAction(CHANGE_FOOTER_FIELD);
