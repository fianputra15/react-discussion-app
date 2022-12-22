import { ActionType } from './action';

function filteredReducer(filtered = '', action = {}) {
  switch (action.type) {
    case ActionType.SET_FILTER: {
      if (action.payload === filtered) {
        return '';
      }
      return action.payload;
    }
    default:
      return filtered;
  }
}

export default filteredReducer;
