import { createReducer } from '@reduxjs/toolkit';
import { changeSubscribeInput } from '../actions/actionsCreators';

const initialState = '';

const subscribeReduser = createReducer(initialState, {
  [changeSubscribeInput]: (state, action) => action.payload.value,
});

export default subscribeReduser;
