import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbDownOffAlt, MdReply, MdThumbUpOffAlt, MdThumbUpAlt, MdThumbDownAlt,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import postedAt from '../../utils/postedAt';
import ThreadBody from './ThreadBody';
import ThreadHead from './ThreadHead';
import { asyncToogleDownVoteThread, asyncToogleNeutralizeVoteThread, asyncToogleUpVoteThread } from '../../states/threads/action';
import { asyncToogleDownVoteThreadDetail, asyncToogleNeutralizeVoteThreadDetail, asyncToogleUpVoteThreadDetail } from '../../states/threadDetail/action';

export default function ThreadItem(props) {
  const {
    thread, users, isDetail,
  } = props;
  const {
    authUser = {},
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const handleGetUserDetail = (id) => users?.filter((user) => user?.id === id)[0];

  const handleThreadUpVote = (id) => {
    if (isDetail) {
      dispatch(asyncToogleUpVoteThreadDetail(id));
      return;
    }
    dispatch(asyncToogleUpVoteThread(id));
  };
  const handleThreadDownVote = (id) => {
    if (isDetail) {
      dispatch(asyncToogleDownVoteThreadDetail(id));
      return;
    }
    dispatch(asyncToogleDownVoteThread(id));
  };
  const handleNeutralizeVote = (id) => {
    if (isDetail) {
      dispatch(asyncToogleNeutralizeVoteThreadDetail(id));
      return;
    }
    dispatch(asyncToogleNeutralizeVoteThread(id));
  };
  return (
    <div
      className="bg-white p-4 w-full h-auto shadow-md rounded"
    >
      {
        isDetail ? (
          <ThreadHead
            avatar={thread?.owner?.avatar}
            name={thread?.owner?.name}
            title={thread?.title}
            id={thread?.id}
            isDetail={isDetail}
          />
        ) : (
          <ThreadHead
            avatar={handleGetUserDetail(thread?.ownerId)?.avatar}
            name={handleGetUserDetail(thread?.ownerId)?.name}
            title={thread?.title}
            id={thread?.id}
            isDetail={isDetail}
          />
        )
      }

      <div className=" my-2">
        <span className="p-2 bg-red-300 text-white rounded text-sm">
          #
          {thread?.category}
        </span>
      </div>
      <ThreadBody body={thread?.body} fullContent={isDetail} />
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => {
            // Checking if user have up votes thread if yes then neutralize
            if (thread?.upVotesBy?.includes(authUser?.id)) {
              handleNeutralizeVote(thread?.id);
              return;
            }
            handleThreadUpVote(thread?.id);
          }}
          type="button"
        >
          <div className="flex items-center gap-[2px]">
            {
              thread?.upVotesBy?.includes(authUser?.id) ? (
                <MdThumbUpAlt color="#e64e41" />

              ) : (
                <MdThumbUpOffAlt color="#e64e41" />
              )
            }

            <span className="text-[12px]">
              {thread?.upVotesBy?.length || '0'}
            </span>
          </div>
        </button>
        <button
          onClick={() => {
            // Checking if user have down votes thread if yes then neutralize
            if (thread?.downVotesBy?.includes(authUser?.id)) {
              handleNeutralizeVote(thread?.id);
              return;
            }
            handleThreadDownVote(thread?.id);
          }}
          type="button"
        >
          <div className="flex items-center gap-[2px]">
            {
              thread?.downVotesBy?.includes(authUser?.id) ? (
                <MdThumbDownAlt color="#e64e41" />

              ) : (
                <MdThumbDownOffAlt color="#e64e41" />
              )
            }

            <span className="text-[12px]">
              {thread?.downVotesBy?.length || '0'}
            </span>
          </div>
        </button>
        <div>
          <div className="flex items-center gap-[2px]">
            <MdReply color="#e64e41" />
            <span className="text-[12px]">
              {thread?.comments?.length || '0'}
            </span>
            <span className="ml-3 text-[12px]">
              {postedAt(thread?.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
const userArray = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
const threadShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  comments: PropTypes.array,
};

ThreadItem.propTypes = {
  thread: PropTypes.shape(threadShape),
  users: PropTypes.arrayOf(PropTypes.shape(userArray)).isRequired,
  isDetail: PropTypes.bool,
};

ThreadItem.defaultProps = {
  isDetail: false,
  thread: {
    title: '',
    ownerId: '',
    body: '',
    upVotesBy: [],
    downVotesBy: [],
  },
};
