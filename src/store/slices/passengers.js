import { createSlice } from '@reduxjs/toolkit';
const globalParams = {
  active: false,
  onFocus: false,
  adultStatus: null,
  route_direction_id: null,
  seats: [],
  coaches: [],
  coachOptions: {
    air_conditioning: false,
    wifi: false,
    linens: false,
  },
};
const initialState = {
  departure: { ...globalParams, onFocus: true },
  arrival: { ...globalParams },
  activeTab: 'departure',
  user: {
    first_name: '',
    last_name: '',
    patronymic: '',
    phone: '',
    email: '',
    payment_method: 'online',
  },
};

const passengers = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    setRouteParam: (state, action) => {
      return {
        ...state,
        [action.payload.route]: {
          active: action.payload.active,
          adultStatus: action.payload.adultStatus,
          seats: action.payload.seats,
        },
      };
    },
    setPassengerAge: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        seats: state[action.payload.route].seats.map((seat) =>
          seat.id === action.payload.id
            ? {
                ...seat,
                is_child: action.payload.value,
              }
            : seat
        ),
      },
    }),
    setActiveTab: (state, action) => ({
      ...state,
      activeTab: action.payload.route,
    }),
    setCoachOption: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        coachOptions: {
          ...state[action.payload.route].coachOptions,
          [action.payload.name]: action.payload.value,
        },
      },
    }),
    setCoachOptionsDefault: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        coachOptions: { ...globalParams.coachOptions },
      },
    }),
    setCoaches: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        coaches: action.payload.coaches,
      },
    }),
    setAdultStatus: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        adultStatus: action.payload.adultStatus,
        active: action.payload.active,
        route_direction_id: action.payload.id,
      },
    }),
    setDepartureActive: (state, action) => ({
      ...state,
      departure: { ...state.departure, active: action.payload },
    }),
    setArrivalActive: (state, action) => ({
      ...state,
      arrival: { ...state.arrival, active: action.payload },
    }),
    addPassenger: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        seats: [...state[action.payload.route].seats, action.payload.seat],
      },
    }),
    deletePassenger: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        seats: state[action.payload.route].seats.filter(
          (seat) => seat.seat_number !== action.payload.index
        ),
      },
    }),
    addPersonInfo: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        seats: state[action.payload.route].seats.map((seat) =>
          seat.id === action.payload.id
            ? {
                ...seat,
                person_info: action.payload.person_info,
              }
            : seat
        ),
      },
    }),
    setConfirmed: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        seats: state[action.payload.route].seats.map((seat) =>
          seat.id === action.payload.id
            ? {
                ...seat,
                confirmed: action.payload.confirmed,
              }
            : seat
        ),
      },
    }),
    setUser: (state, action) => ({
      ...state,
      user: action.payload.user,
    }),
  },
});

const { actions, reducer } = passengers;
export const {
  setRouteParam,
  setCoaches,
  setAdultStatus,
  addPassenger,
  deletePassenger,
  setCoachOption,
  setCoachOptionsDefault,
  setActiveTab,
  setPassengerAge,
  addPersonInfo,
  setConfirmed,
  setUser,
} = actions;
export default reducer;
