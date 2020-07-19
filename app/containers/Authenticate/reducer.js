/*
 *
 * Authenticate reducer
 *
 */
import produce from 'immer';
import { loadState, saveState, clearState } from 'utils/app/persistedStore';
import { DEFAULT_ACTION, AUTHENTICATE } from './constants';

const persistedKeys = [];
export const persistedState = loadState(persistedKeys);

export const initialState = {
  loading: false,
  ...persistedState,
};

const authenticateReducer = (state = initialState, action) => {
  // console.log('update projects storage reducer', action);
  // For localStorage
  switch (action.type) {
    default:
      break;
  }

  return produce(state, draft => {
    // console.log('update projects storage reducer', action);
    switch (action.type) {
      case DEFAULT_ACTION:
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
};

export default authenticateReducer;
