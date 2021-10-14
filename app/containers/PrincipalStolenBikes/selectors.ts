/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectPrincipal = (state: ApplicationRootState) => state.principal || initialState;

const makeSelectBikes = () => createSelector(selectPrincipal, substate => substate.bikes);
const makeSelectCountBikes = () => createSelector(selectPrincipal, substate => substate.countBikes);
const makeSelectError = () => createSelector(selectPrincipal, substate => substate.error);




export { selectPrincipal, makeSelectBikes,makeSelectCountBikes,makeSelectError };
