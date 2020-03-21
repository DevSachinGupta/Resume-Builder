/*
 *
 * MyContent reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SET_MODEL_CONTENT,
  GET_COUNTRY_LIST,
  GET_STATE_LIST,
} from './constants';
import { TOGGLE_MODAL } from '../App/constants';
export const initialState = {
  activeModalType: '',
  allCountries: [],
  filterStates: [],
};

/* eslint-disable default-case, no-param-reassign */
const myContentReducer = (state = initialState, action) =>
  produce(state, draft => {
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

export default myContentReducer;
