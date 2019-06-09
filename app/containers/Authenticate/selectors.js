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

export default makeSelectAuthenticate;
export { selectAuthenticateDomain };
