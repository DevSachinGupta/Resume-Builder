/*
 *
 * Settings reducer
 *
 */
import produce from 'immer';
import { loadState, saveState } from 'utils/app/persistedStore';
import { DEFAULT_ACTION } from './constants';

const persistedKeys = [];
export const persistedState = loadState(persistedKeys);

export const initialState = { ...persistedState };

/* eslint-disable default-case, no-param-reassign */
const settingsReducer = (state = initialState, action) => {
  // For localStorage
  switch (action.type) {
    default:
      break;
  }

  return produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });
};
export default settingsReducer;
