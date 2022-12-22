import { ActionType } from './action';

function leaderboardReducer(leaderboardsList = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_LEADERBOARDS_LIST:
      return action.payload.leaderboardsList;
    case ActionType.CLEAR_LEADERBOARDS_LIST:
      return null;
    default:
      return leaderboardsList;
  }
}

export default leaderboardReducer;
