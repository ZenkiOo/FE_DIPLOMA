import {
  CHANGE_DEPARTURE_FIELD,
  CHANGE_ARRIVAL_FIELD,
  CHANGE_DEPARTURE_DATE_FIELD,
  CHANGE_ARRIVAL_DATE_FIELD,
} from '../actions/actionsTypes';

const initialState = {
  departureField: '',
  arrivalField: '',
  departureDateField: '',
  arrivalDateField: '',
};
export default function routesSearchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DEPARTURE_FIELD:
      return { ...state, departureField: action.payload.value };

    case CHANGE_ARRIVAL_FIELD:
      return { ...state, arrivalField: action.payload.value };

    case CHANGE_DEPARTURE_DATE_FIELD:
      return { ...state, departureDateField: action.payload.value };

    case CHANGE_ARRIVAL_DATE_FIELD:
      return { ...state, arrivalDateField: action.payload.value };

    default:
      return state;
  }
}
