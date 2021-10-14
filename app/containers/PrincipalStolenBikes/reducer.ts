import ActionTypes from './constants'
import { ContainerState, ContainerActions } from './types';

// The initial state of the App
export const initialState: ContainerState = {
  bikes: [],
  countBikes:{},
  error:null
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.SET_STOLEN_BIKES:
      return {
        ...state,
        bikes: action.payload,
        error:null
      };
      case ActionTypes.SET_COUNT_BIKES:
        return {
          ...state,
          countBikes: action.payload,
          error:null
        };
        case ActionTypes.ERROR_GET_STOLEN_BIKES:
          return {
            ...state,
            error: action.payload
          };
    default:
      return state;
  }
}

export default homeReducer;
