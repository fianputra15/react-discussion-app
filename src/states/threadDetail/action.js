import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { receiveThreadCommentActionCreator } from '../threadComment/action';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL: 'TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    try {
      dispatch(clearThreadDetailActionCreator());
      dispatch(showLoading());
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      dispatch(receiveThreadCommentActionCreator(threadDetail?.comments));
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function toggleUpvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}
function toggleDownvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncToogleUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    try {
      dispatch(showLoading());
      dispatch(toggleUpvoteThreadActionCreator({ threadId, userId: authUser.id }));
      await api.toggleUpVoteThread(threadId);
    } catch (error) {
      dispatch(toggleUpvoteThreadActionCreator({ threadId, userId: authUser.id }));
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    try {
      dispatch(showLoading());
      dispatch(toggleDownvoteThreadActionCreator({ threadId, userId: authUser.id }));
      await api.toggleDownVoteThread(threadId);
    } catch (error) {
      dispatch(toggleDownvoteThreadActionCreator({ threadId, userId: authUser.id }));
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}
function asyncToogleNeutralizeVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    try {
      dispatch(showLoading());
      dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }));
      await api.toggleNeutralizeVoteThread(threadId);
    } catch (error) {
      dispatch(toggleNeutralizeVoteThreadActionCreator({ threadId, userId: authUser.id }));
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncToogleUpVoteThreadDetail,
  asyncToogleDownVoteThreadDetail,
  asyncToogleNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,

};
