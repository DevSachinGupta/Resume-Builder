/*
 *
 * Builder actions
 *
 */

import { DEFAULT_ACTION, HANDLE_SIDEBAR_STATE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
/**
 * @description function to handle Sidebar State
 */
export function toggleSidebar() {
  return {
    type: HANDLE_SIDEBAR_STATE,
  };
}
