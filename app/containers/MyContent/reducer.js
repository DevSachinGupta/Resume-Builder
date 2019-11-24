/*
 *
 * MyContent reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SET_MODEL_CONTENT } from './constants';

export const initialState = {
  activeModalType: '',
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
    }
  });

export default myContentReducer;
