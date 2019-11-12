import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the builder state domain
 */

const selectBuilderDomain = state => state.builder || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Builder
 */

const makeSelectBuilder = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate,
  );
const makeSelectIsSidebarOpen = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.isSidebarOpen,
  );
const makeSelectIsSecondarySidebarOpen = () =>
  createSelector(
    selectBuilderDomain,
    substate => substate.isSecondarySidebarOpen,
  );
export default makeSelectBuilder;
export {
  selectBuilderDomain,
  makeSelectIsSidebarOpen,
  makeSelectIsSecondarySidebarOpen,
};
