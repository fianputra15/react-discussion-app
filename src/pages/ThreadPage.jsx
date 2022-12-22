import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Wrapper from '../components/common/Wrapper';
import ThreadItem from '../components/Thread/ThreadItem';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { asyncCreateThreadComment, clearThreadCommentActionCreator } from '../states/threadComment/action';
import CommentForm from '../components/ThreadDetail.jsx/CommentForm';
import CommentList from '../components/ThreadDetail.jsx/CommentList';

export default function ThreadPage() {
  const { id } = useParams();

  const {
    threadDetail = [],
    threadComments = [],
    users = [],
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const handleStoreComment = async ({ threadComment }) => {
    const payload = {
      threadComment,
      threadId: id,
    };
    await dispatch(asyncCreateThreadComment(payload));
    dispatch(asyncReceiveThreadDetail(id));

    return () => {
      dispatch(clearThreadCommentActionCreator);
    };
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch]);

  return (
    <Wrapper width="default" className="h-full">
      <ThreadItem isDetail users={users} thread={threadDetail} />
      <CommentForm handleStoreComment={handleStoreComment} />
      <div className="mt-2 drop-shadow-sm">
        <h4 className="font-bold">
          Komentar
          (
          {threadComments?.length}
          )
        </h4>
        <ul className="space-y-2 ">
          {
            threadComments?.map((comment) => (

              <CommentList key={comment?.id} comment={comment} />
            ))
          }
        </ul>
      </div>
    </Wrapper>
  );
}
