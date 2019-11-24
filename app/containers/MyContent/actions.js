/*
 *
 * MyContent actions
 *
 */

import { DEFAULT_ACTION, SET_MODEL_CONTENT } from './constants';
import { TOGGLE_MODAL } from '../App/constants';
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function setModalContent(contentType) {
  return [
    {
      type: SET_MODEL_CONTENT,
      contentType,
    },
    {
      type: TOGGLE_MODAL,
    },
  ];
}
