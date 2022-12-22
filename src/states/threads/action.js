import { toast } from 'react-toastify';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREAD',
  CLEAR_THREADS: 'CLEAR_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD',
  TOGGLE_NEUTRALIZE_VOTE_THREAD: 'TOGGLE_NEUTRALIZE_VOTE_THREAD',
  TOGGLE_FILTER_THREAD: 'TOGGLE_FILTER_THREAD',
};

function clearThreadsActionCreator() {
  return {
    type: ActionType.CLEAR_THREADS,
  };
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleFilterThreadByCategory(category) {
  return {
    type: ActionType.TOGGLE_FILTER_THREAD,
    payload: {
      category,
    },
  };
}

function toggleUpvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}
function toggleDownvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      dispatch(showLoading);
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
      toast.success('Successfully added new thread');
    } catch (error) {
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleUpVoteThread(threadId) {
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

function asyncToogleDownVoteThread(threadId) {
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
function asyncToogleNeutralizeVoteThread(threadId) {
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
  receiveThreadsActionCreator,
  clearThreadsActionCreator,
  addThreadActionCreator,
  toggleUpvoteThreadActionCreator,
  asyncAddThread,
  toggleFilterThreadByCategory,
  asyncToogleUpVoteThread,
  asyncToogleDownVoteThread,
  asyncToogleNeutralizeVoteThread,
  toggleNeutralizeVoteThreadActionCreator,
};
