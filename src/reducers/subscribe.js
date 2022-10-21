import { CHANGE_FOOTER_FIELD } from '../actions/actionsTypes';

const initialState = '';

export default function subscribeReduser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FOOTER_FIELD:
      return action.payload.value;
    default:
      return state;
  }
}
