import { ActionType } from './action';

function threadDetailReducer(threadDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      return {
        ...threadDetail,
        likes: threadDetail.likes.includes(action.payload.userId)
          ? threadDetail.likes.filter((id) => id !== action.payload.userId)
          : threadDetail.likes.concat(action.payload.userId),
      };
    case ActionType.TOGGLE_UPVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy.concat([action.payload.userId]),
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy.concat([action.payload.userId]),
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
