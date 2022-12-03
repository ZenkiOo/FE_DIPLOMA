import { createSlice } from '@reduxjs/toolkit';
const globalParams = {
  have_first_class: null,
  have_second_class: null,
  have_third_class: null,
  have_fourth_class: null,
  have_wifi: null,
  have_air_conditioning: null,
  have_express: null,
};
const initialState = {
  routes: {
    active: true,
    departure: {},
    arrival: { departure: {} },
    params: {
      from_city_id: null,
      to_city_id: null,
      date_start: null,
      date_end: null,
      date_start_arrival: null,
      date_end_arrival: null,
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
      ...globalParams,
    },
  },
  coaches: {
    departure: { ...globalParams },
    arrival: { ...globalParams },
  },
};

const routesParams = createSlice({
  name: 'routesParams',
  initialState,
  reducers: {
    setCoachesActive: (state, action) => ({
      ...state,
      routes: {
        ...state.routes,
        active: false,
        departure: action.payload.departure,
        arrival: action.payload.arrival ? action.payload.arrival : {},
      },
    }),
    setRoutesActive: (state) => ({
      ...state,
      routes: {
        ...state.routes,
        active: true,
        departure: { departure: {} },
        arrival: { departure: {} },
      },
    }),
    setCoachesParams: (state, action) => ({
      ...state,
      coaches: {
        departure: {
          ...state.coaches.departure,
          [action.payload.param]: action.payload.value,
        },
        arrival: {
          ...state.coaches.arrival,
          [action.payload.param]: action.payload.value,
        },
      },
    }),
    setCoachParam: (state, action) => ({
      ...state,
      coaches: {
        ...state.coaches,
        [action.payload.name]: {
          ...state.coaches[action.payload.name],
          [action.payload.param]: action.payload.value,
        },
      },
    }),
    setGlobalCoachesParams: (state) => ({
      ...state,
      coaches: {
        departure: { ...state.routes.params },
        arrival: { ...state.routes.params },
      },
    }),
    setRoutesParam: (state, action) => ({
      routes: {
        ...state.routes,
        params: {
          ...state.routes.params,
          [action.payload.param]: action.payload.value,
        },
      },
      coaches: {
        departure: globalParams.hasOwnProperty(action.payload.param)
          ? {
              ...state.coaches.departure,
              [action.payload.param]: action.payload.value,
            }
          : { ...state.coaches.departure },
        arrival: globalParams.hasOwnProperty(action.payload.param)
          ? {
              ...state.coaches.arrival,
              [action.payload.param]: action.payload.value,
            }
          : { ...state.coaches.arrival },
      },
    }),
    setForm: (state, action) => {
      const { from_city_id, to_city_id, date_start, date_end } = action.payload;
      return {
        ...state,
        routes: {
          ...state.routes,
          active: true,
          params: {
            ...state.routes.params,
            from_city_id,
            to_city_id,
            date_start,
            date_end,
          },
        },
      };
    },
    setPricePickerValue: (state, action) => ({
      ...state,
      routes: {
        ...state.routes,
        params: {
          ...state.routes.params,
          price_from: action.payload.value.min,
          price_to: action.payload.value.max,
        },
      },
    }),
    setStartDepartureHour: (state, action) => ({
      ...state,
      routes: {
        ...state.routes,
        params: {
          ...state.routes.params,
          start_departure_hour_from: action.payload.value.min,
          start_departure_hour_to: action.payload.value.max,
        },
      },
    }),
    setEndDepartureHour: (state, action) => ({
      ...state,
      routes: {
        ...state.routes,
        params: {
          ...state.routes.params,
          end_departure_hour_from: action.payload.value.min,
          end_departure_hour_to: action.payload.value.max,
        },
      },
    }),
    setStartArrivalHour: (state, action) => ({
      ...state,
      routes: {
        ...state.routes,
        params: {
          ...state.routes.params,
          start_arrival_hour_from: action.payload.value.min,
          start_arrival_hour_to: action.payload.value.max,
        },
      },
    }),
    setEndArrivalHour: (state, action) => ({
      ...state,
      routes: {
        ...state.routes,
        params: {
          ...state.routes.params,
          end_arrival_hour_from: action.payload.value.min,
          end_arrival_hour_to: action.payload.value.max,
        },
      },
    }),
  },
});

const { actions, reducer } = routesParams;
export const {
  setRoutesParam,
  setForm,
  setCoachesActive,
  setRoutesActive,
  setCoachParam,
  setCoachesParams,
  setGlobalCoachesParams,
  setPricePickerValue,
  setStartDepartureHour,
  setEndDepartureHour,
  setStartArrivalHour,
  setEndArrivalHour
} = actions;
export default reducer;
