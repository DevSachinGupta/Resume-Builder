/*
 *
 * Authenticate reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  AUTHENTICATE,
  USER_LOADING,
  UPDATE_TEMPLATE_NUMBER_STATE,
} from './constants';

export const initialState = {
  isAuthenticated: false,
  userData: {},
  loading: false,
  templateNumberState: null,
};

/* eslint-disable default-case, no-param-reassign */
const authenticateReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case `${AUTHENTICATE}_SET_CURRENT_USER`:
        draft.isAuthenticated = action.isAuthenticated;
        draft.userData = action.userData;
        break;
      case USER_LOADING:
        draft.loading = true;
        break;
      case `${AUTHENTICATE}_UNSET`:
        draft.userData = null;
        draft.isAuthenticated = false;
        break;
      case UPDATE_TEMPLATE_NUMBER_STATE:
        console.log('update temp number:', action.templateNumberState);
        draft.templateNumberState = action.templateNumberState;
        break;
      case `${AUTHENTICATE}_LOGIN`:
        break;
      case `${AUTHENTICATE}_LOGOUT`:
        break;
      case `${AUTHENTICATE}_SIGNUP`:
        break;
      case `${AUTHENTICATE}_FORGOT_PASSWORD`:
        break;
      case `${AUTHENTICATE}_FORGOT_PASSWORD_RESET`:
        break;
      default:
        break;
    }
  });

export default authenticateReducer;
