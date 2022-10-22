import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

const subscribe = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    changeSubscribeInput: (state, action) => {
      return { ...state, email: action.payload.value };
    },
  },
});
const { actions, reducer } = subscribe;
export const { changeSubscribeInput } = actions;
export default reducer;
