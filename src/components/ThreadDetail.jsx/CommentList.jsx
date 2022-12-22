import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbUpAlt, MdThumbDownOffAlt, MdThumbUpOffAlt, MdThumbDownAlt,
} from 'react-icons/md';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import postedAt from '../../utils/postedAt';
import { asyncToogleDownVoteThreadComment, asyncToogleNeutralizeVoteThreadComment, asyncToogleUpVoteThreadComment } from '../../states/threadComment/action';

export default function CommentList(props) {
  const { comment } = props;
  const {
    authUser = {},
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const handleThreadUpVote = (id) => {
    dispatch(asyncToogleUpVoteThreadComment(id));
  };
  const handleThreadDownVote = (id) => {
    dispatch(asyncToogleDownVoteThreadComment(id));
  };
  const handleNeutralizeVote = (id) => {
    dispatch(asyncToogleNeutralizeVoteThreadComment(id));
  };

  return (
    <li className="bg-white p-4 w-full h-auto shadow-md rounded">
      <div className=" text-[12px] text-right mb-2">
        <span className="flex items-center gap-2">
          <img
            className="w-[30px] rounded-full"
            src={comment?.owner?.avatar}
            alt={comment?.owner?.avatar}
          />
          <span>{comment?.owner?.name}</span>
        </span>
      </div>
      <div
        className="text-body text-gray-800  "
      >
        {comment?.content && parse(comment?.content)}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => {
          // Checking if user have up votes thread if yes then neutralize
            if (comment?.upVotesBy?.includes(authUser?.id)) {
              handleNeutralizeVote(comment?.id);
              return;
            }
            handleThreadUpVote(comment?.id);
          }}
          type="button"
        >
          <div className="flex items-center gap-[2px]">
            {
              comment?.upVotesBy?.includes(authUser?.id) ? (
                <MdThumbUpAlt color="#e64e41" />

              ) : (
                <MdThumbUpOffAlt color="#e64e41" />
              )
            }

            <span className="text-[12px]">
              {comment?.upVotesBy?.length || '0'}
            </span>
          </div>
        </button>
        <button
          onClick={() => {
            // Checking if user have down votes comment if yes then neutralize
            if (comment?.downVotesBy?.includes(authUser?.id)) {
              handleNeutralizeVote(comment?.id);
              return;
            }
            handleThreadDownVote(comment?.id);
          }}
          type="button"
        >
          <div className="flex items-center gap-[2px]">
            {
              comment?.downVotesBy?.includes(authUser?.id) ? (
                <MdThumbDownAlt color="#e64e41" />

              ) : (
                <MdThumbDownOffAlt color="#e64e41" />
              )
            }

            <span className="text-[12px]">
              {comment?.downVotesBy?.length || '0'}
            </span>
          </div>
        </button>
        <div>
          <div className="flex items-center gap-[2px]">
            <span className="ml-3 text-[12px]">
              {postedAt(comment?.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
const userArray = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
const commentShape = {
  content: PropTypes.string,
  body: PropTypes.string,
  owner: PropTypes.shape(userArray),
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  totalComments: PropTypes.number,
  createdAt: PropTypes.string,
};

CommentList.propTypes = {
  comment: PropTypes.shape(commentShape),
};

CommentList.defaultProps = {
  comment: {
    content: '',
    body: '',
    owner: '',
    upVotesBy: '',
    downVotesBy: '',
    totalComments: '',
    createdAt: '',
  },
};
