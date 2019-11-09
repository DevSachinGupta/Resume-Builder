/*
 *
 * Builder reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, HANDLE_SIDEBAR_STATE } from './constants';

export const initialState = {
  isSidebarOpen: true,
};

/* eslint-disable default-case, no-param-reassign */
const builderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HANDLE_SIDEBAR_STATE:
        draft.isSidebarOpen = !state.isSidebarOpen;
        break;
    }
  });

export default builderReducer;
