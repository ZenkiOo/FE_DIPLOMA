import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
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

const passangers = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    // setCoachesActive: (state, action) => ({
    //   ...state,
    //   routes: {
    //     ...state.routes,
    //     active: false,
    //     departure: action.payload.departure,
    //     arrival: action.payload.arrival ? action.payload.arrival : {},
    //   },
    // }),
    // setRoutesParam: (state, action) => ({
    //   routes: {
    //     ...state.routes,
    //     params: {
    //       ...state.routes.params,
    //       [action.payload.param]: action.payload.value,
    //     },
    //   },
    //   coaches: {
    //     ...state.coaches,
    //     params: {
    //       0: globalParams.hasOwnProperty(action.payload.param)
    //         ? {
    //             ...state.coaches.params[0],
    //             [action.payload.param]: action.payload.value,
    //           }
    //         : { ...state.coaches.params[0] },
    //       1: globalParams.hasOwnProperty(action.payload.param)
    //         ? {
    //             ...state.coaches.params[1],
    //             [action.payload.param]: action.payload.value,
    //           }
    //         : { ...state.coaches.params[1] },
    //     },
    //   },
    // }),
    // setForm: (state, action) => {
    //   const { from_city_id, to_city_id, date_start, date_end } = action.payload;
    //   return {
    //     ...state,
    //     routes: {
    //       ...state.routes,
    //       active: true,
    //       params: {
    //         ...state.routes.params,
    //         from_city_id,
    //         to_city_id,
    //         date_start,
    //         date_end,
    //       },
    //     },
    //   };
    // },
  },
});

const { actions, reducer } = routesParams;
export const { setRoutesParam, setForm, setCoachesActive } = actions;
export default reducer;
