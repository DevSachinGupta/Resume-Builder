/*
 *
 * MyContent reducer
 *
 */
import produce from 'immer';
import { loadState, saveState } from 'utils/app/persistedStore';
import {
  DEFAULT_ACTION,
  SET_MODEL_CONTENT,
  GET_COUNTRY_LIST,
  GET_STATE_LIST,
} from './constants';
import { TOGGLE_MODAL } from '../App/constants';

const persistedKeys = ['allCountries'];
export const persistedState = loadState(persistedKeys);

export const initialState = {
  activeModalType: '',
  allCountries: [],
  filterStates: [],
  ...persistedState,
};

/* eslint-disable default-case, no-param-reassign */
const myContentReducer = (state = initialState, action) => {
  // For localStorage
  switch (action.type) {
    case `${GET_COUNTRY_LIST}_SUCCESS`:
      saveState('allCountries', action.data);
      break;
    default:
      break;
  }

  return produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_MODEL_CONTENT:
        draft.activeModalType = action.contentType;
        break;
      case `${GET_COUNTRY_LIST}_SUCCESS`:
        draft.allCountries = action.data;
        break;
      case `${GET_STATE_LIST}_SUCCESS`:
        draft.filterStates = action.data;
        break;
    }
  });
};
export default myContentReducer;
