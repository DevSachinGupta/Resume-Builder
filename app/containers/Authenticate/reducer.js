/*
 *
 * Authenticate reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, AUTHENTICATE } from './constants';

export const initialState = {
  uuid: null,
  isAuthenticated: null,
};

/* eslint-disable default-case, no-param-reassign */
const authenticateReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case `${AUTHENTICATE}_SET`:
        draft.uuid = action.uuid;
        draft.isAuthenticated = true;
        break;
      case `${AUTHENTICATE}_UNSET`:
        draft.uuid = null;
        draft.isAuthenticated = false;
        break;
      case `${AUTHENTICATE}_LOGIN`:
        break;
      case `${AUTHENTICATE}_LOGOUT`:
        break;
      case `${AUTHENTICATE}_SIGNUP`:
        break;
      case `${AUTHENTICATE}_FORGOT_PASSWORD`:
        break;
      default:
        break;
    }
  });

export default authenticateReducer;
