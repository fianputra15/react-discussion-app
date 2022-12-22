import { ActionType } from './action';

function threadCommentReducer(threadComment = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_COMMENT:
      return action.payload.threadComment;
    case ActionType.CREATE_THREAD_COMMENT:
      return [action.payload.threadComment, ...threadComment];
    case ActionType.CLEAR_THREAD_COMMENT:
      return null;
    case ActionType.TOGGLE_UPVOTE_THREAD_COMMENT:
      return threadComment.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
              : comment.upVotesBy.concat([action.payload.userId]),
          };
        }
        return comment;
      });

    case ActionType.TOGGLE_DOWNVOTE_THREAD_COMMENT:
      return threadComment.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
              : comment.downVotesBy.concat([action.payload.userId]),
            upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return comment;
      });
    case ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_COMMENT:
      return threadComment.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return comment;
      });

    default:
      return threadComment;
  }
}

export default threadCommentReducer;
