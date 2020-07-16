/**
 * The global state selectors
 */

import get from 'lodash/get';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );
const makeSelectIsModalOpen = () =>
  createSelector(
    selectGlobal,
    globalState => get(globalState, 'modalState.isOpen', false),
  );
const makeSelectPublishType = () =>
  createSelector(
    selectGlobal,
    globalState => get(globalState, 'publishType', false),
  );
const makeSelectIsUserMenuOpen = () =>
  createSelector(
    selectGlobal,
    globalState => get(globalState, 'headerState.isUserPillOpen', false),
  );
export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectIsModalOpen,
  makeSelectPublishType,
  makeSelectIsUserMenuOpen,
};
