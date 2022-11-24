import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
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
};
const fakePassenger = {
  user: {
    first_name: 'Иван',
    last_name: 'Смирнов',
    patronymic: 'Олегович',
    phone: '8900123123',
    email: 'string@string.ru',
    payment_method: 'cash',
  },
  departure: {
    route_direction_id: '123431',
    seats: [
      {
        coach_id: '12341',
        person_info: {
          is_adult: true,
          first_name: 'Ivan',
          last_name: 'Popov',
          patronymic: 'Popovich',
          gender: true,
          birthday: '1980-01-01',
          document_type: 'паспорт',
          document_data: '45 6790195',
        },
        seat_number: 10,
        is_child: true,
        include_children_seat: true,
      },
    ],
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
  setPassengerAge
} = actions;
export default reducer;
