import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departureField: '',
  arrivalField: '',
  departureDateField: '',
  arrivalDateField: '',
};

const routesSearch = createSlice({
  name: 'routesSearch',
  initialState,
  reducers: {
    changeDepartureInput: (state, action) => {
      return { ...state, departureField: action.payload.value };
    },
    changeArrivalInput: (state, action) => {
      return { ...state, arrivalField: action.payload.value };
    },
    changeDeparureDateInput: (state, action) => {
      return { ...state, departureDateField: action.payload.value };
    },
    changeArrivalDateInput: (state, action) => {
      return { ...state, arrivalDateField: action.payload.value };
    },
  },
});

const { actions, reducer } = routesSearch;
export const {
  changeDepartureInput,
  changeArrivalInput,
  changeDeparureDateInput,
  changeArrivalDateInput,
} = actions;
export default reducer;
