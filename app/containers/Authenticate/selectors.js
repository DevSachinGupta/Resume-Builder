import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authenticate state domain
 */

const selectAuthenticateDomain = state => state.authenticate || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authenticate
 */

const makeSelectAuthenticate = () =>
  createSelector(
    selectAuthenticateDomain,
    substate => substate,
  );
const makeSelectGetUserIsAuthenticated = () =>
  createSelector(
    selectAuthenticateDomain,
    substate => substate.isAuthenticated,
  );
const makeSelectGetCurrentUserData = () =>
  createSelector(
    selectAuthenticateDomain,
    substate => substate.userData,
  );
const makeSelectGetUserLoading = () =>
  createSelector(
    selectAuthenticateDomain,
    substate => substate.loading,
  );
const makeUpdateTemplateNumberState = () =>
  createSelector(
    selectAuthenticateDomain,
    substate => substate.templateNumberState,
  );

export default makeSelectAuthenticate;
export {
  selectAuthenticateDomain,
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
  makeSelectGetUserLoading,
  makeUpdateTemplateNumberState,
};
