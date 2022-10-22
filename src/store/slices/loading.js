import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
  },
});
const { actions, reducer } = loading;
export const { setLoading } = actions;
export default reducer;
