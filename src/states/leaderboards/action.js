import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  SET_LEADERBOARDS_LIST: 'SET_LEADERBOARDS_LIST',
  CLEAR_LEADERBOARDS_LIST: 'CLEAR_LEADERBOARDS_LIST',
};

function setLeaderboardsList(leaderboardsList) {
  return {
    type: ActionType.SET_LEADERBOARDS_LIST,
    payload: {
      leaderboardsList,
    },
  };
}
function clearLeaderboardListActionCreator() {
  return {
    type: ActionType.CLEAR_LEADERBOARDS_LIST,
  };
}

function asyncReceiveLeaderboardsList() {
  return async (dispatch) => {
    try {
      dispatch(clearLeaderboardListActionCreator());
      dispatch(showLoading());
      const leaderboardsList = await api.getLeaderboardList();
      dispatch(setLeaderboardsList(leaderboardsList));
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  asyncReceiveLeaderboardsList,
  setLeaderboardsList,
};
