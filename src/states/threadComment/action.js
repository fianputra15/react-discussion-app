import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_COMMENT: 'RECEIVE_THREAD_COMMENT',
  CLEAR_THREAD_COMMENT: 'CLEAR_THREAD_COMMENT',
  CREATE_THREAD_COMMENT: 'CREATE_THREAD_COMMENT',
  TOGGLE_UPVOTE_THREAD_COMMENT: 'TOGGLE_UPVOTE_THREAD_COMMENT',
  TOGGLE_DOWNVOTE_THREAD_COMMENT: 'TOGGLE_DOWNVOTE_THREAD_COMMENT',
  TOGGLE_NEUTRALIZE_VOTE_THREAD_COMMENT: 'TOGGLE_NEUTRALIZE_VOTE_THREAD_COMMENT',
};

function receiveThreadCommentActionCreator(threadComment) {
  return {
    type: ActionType.RECEIVE_THREAD_COMMENT,
    payload: {
      threadComment,
    },
  };
}
function clearThreadCommentActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_COMMENT,
  };
}

function addThreadCommentActionCreator({ threadId, threadComment }) {
  return {
    type: ActionType.CREATE_THREAD_COMMENT,
    payload: {
      threadId,
      threadComment,
    },
  };
}

function asyncCreateThreadComment({
  threadId,
  threadComment,
}) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const commentThread = await api.createComment({
        threadId,
        threadComment,
      });
      dispatch(addThreadCommentActionCreator(commentThread));
      toast.success('Successfully added new comment');
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function toggleUpvoteThreadCommentActionCreator({ commentId, userId, threadId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_COMMENT,
    payload: {
      commentId,
      userId,
      threadId,
    },
  };
}
function toggleDownvoteThreadCommentActionCreator({ commentId, userId, threadId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_COMMENT,
    payload: {
      commentId,
      threadId,
      userId,
    },
  };
}

function toggleNeutralizeVoteThreadCommentActionCreator({ commentId, userId, threadId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_COMMENT,
    payload: {
      commentId,
      userId,
      threadId,
    },
  };
}

function asyncToogleUpVoteThreadComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    try {
      dispatch(showLoading());
      dispatch(toggleUpvoteThreadCommentActionCreator({
        commentId,
        threadId: threadDetail?.id,
        userId: authUser.id,
      }));
      await api.toggleUpCommentThread({ commentId, threadId: threadDetail?.id });
    } catch (error) {
      dispatch(toggleUpvoteThreadCommentActionCreator({
        commentId,
        threadId: threadDetail?.id,
        userId: authUser.id,
      }));
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToogleDownVoteThreadComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    try {
      dispatch(showLoading());
      dispatch(toggleDownvoteThreadCommentActionCreator(
        { commentId, threadId: threadDetail?.id, userId: authUser.id },
      ));
      await api.toggleDownCommentThread({ commentId, threadId: threadDetail?.id });
    } catch (error) {
      dispatch(toggleDownvoteThreadCommentActionCreator({
        commentId,
        threadId: threadDetail?.id,
        userId: authUser.id,
      }));
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}
function asyncToogleNeutralizeVoteThreadComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    try {
      dispatch(showLoading());
      dispatch(toggleNeutralizeVoteThreadCommentActionCreator({
        commentId,
        threadId: threadDetail?.id,
        userId: authUser.id,
      }));
      await api.toggleNeutralizeCommentThread({ commentId, threadId: threadDetail?.id });
    } catch (error) {
      dispatch(toggleNeutralizeVoteThreadCommentActionCreator({
        commentId,
        threadId: threadDetail?.id,
        userId: authUser.id,
      }));
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  asyncCreateThreadComment,
  receiveThreadCommentActionCreator,
  clearThreadCommentActionCreator,
  addThreadCommentActionCreator,
  asyncToogleUpVoteThreadComment,
  asyncToogleDownVoteThreadComment,
  asyncToogleNeutralizeVoteThreadComment,
};
