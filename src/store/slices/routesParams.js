import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from_city_id: null,
  to_city_id: null,
  date_start: null,
  date_end: null,
  date_start_arrival: null,
  date_end_arrival: null,
  have_first_class: null,
  have_second_class: null,
  have_third_class: null,
  have_fourth_class: null,
  have_wifi: null,
  have_air_conditioning: null,
  have_express: null,
  price_from: null,
  price_to: null,
  start_departure_hour_from: null,
  start_departure_hour_to: null,
  start_arrival_hour_from: null,
  start_arrival_hour_to: null,
  end_departure_hour_from: null,
  end_departure_hour_to: null,
  end_arrival_hour_from: null,
  end_arrival_hour_to: null,
  limit: null,
  offset: null,
  sort: null,
};

const routesParams = createSlice({
  name: 'routesParams',
  initialState,
  reducers: {
    setParam: (state, action) => {
      return { ...state, [action.payload.param]: action.payload.value };
    },
    setForm: (state, action) => {
      const { from_city_id, to_city_id, date_start, date_end } = action.payload;
      return { ...state, from_city_id, to_city_id, date_start, date_end };
    },
  },
});

const { actions, reducer } = routesParams;
export const { setParam, setForm } = actions;
export default reducer;
