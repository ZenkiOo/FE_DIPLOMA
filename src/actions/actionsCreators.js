import {
  CHANGE_DEPARTURE_FIELD,
  CHANGE_ARRIVAL_FIELD,
  CHANGE_DEPARTURE_DATE_FIELD,
  CHANGE_ARRIVAL_DATE_FIELD,
  CHANGE_FOOTER_FIELD,
} from './actionsTypes';

export function changeDeparureInput(value) {
  return { type: CHANGE_DEPARTURE_FIELD, payload: { value } };
}

export function changeArrivalInput(value) {
  return { type: CHANGE_ARRIVAL_FIELD, payload: { value } };
}

export function changeDeparureDateInput(value) {
  return { type: CHANGE_DEPARTURE_DATE_FIELD, payload: { value } };
}

export function changeArrivalDateInput(value) {
  return { type: CHANGE_ARRIVAL_DATE_FIELD, payload: { value } };
}

export function changeSubscribeInput(value) {
  return { type: CHANGE_FOOTER_FIELD, payload: { value } };
}
