/*
 *
 * MyContent actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_MODEL_CONTENT,
  GET_COUNTRY_LIST,
  GET_STATE_LIST,
} from './constants';
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
/**
 * @description Action to be dispatched for country list
 */
export function getCountryList() {
  return {
    type: GET_COUNTRY_LIST,
  };
}
/**
 * @description Action to be dispatched for state list based on country ID
 */
export function getStateList(countryID) {
  return {
    type: GET_STATE_LIST,
    countryID,
  };
}
