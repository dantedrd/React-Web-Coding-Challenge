import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

interface PrincipalStolenBikesState {
  readonly bikes: Array<any>;
  readonly countBikes: any;
  readonly error: any;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = PrincipalStolenBikesState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
