import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
const globalParams = {
  active: false,
  adultStatus: null,
  route_direction_id: '',
  seats: [],
};
const initialState = {
  departure: { ...globalParams },
  arrival: { ...globalParams },
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
          route_direction_id: action.payload.route_direction_id,
          seats: action.payload.seats,
        },
      };
    },
    setAdultStatus: (state, action) => ({
      ...state,
      [action.payload.route]: {
        ...state[action.payload.route],
        adultStatus: action.payload.adultStatus,
        active: action.payload.active
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
  },
});

const { actions, reducer } = passengers;
export const { setRouteParam, setAdultStatus } = actions;
export default reducer;
