import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ThreadItem from './ThreadItem';

export default function ThreadList(props) {
  const { threads, filtered } = props;

  const {
    users = [],
  } = useSelector((states) => states);

  if (!filtered) {
    return (
      <ul className="space-y-2">
        {
            threads?.map((thread) => (
              <li key={`${thread?.id}-filtered`}>
                <ThreadItem key={thread?.id} thread={thread} users={users} />
              </li>
            ))
        }
      </ul>
    );
  }
  return (
    <ul className="space-y-2">
      {
        threads?.filter((thrd) => thrd?.category === filtered).map((thread) => (
          <li key={thread?.id}>
            <ThreadItem thread={thread} users={users} />
          </li>
        ))
        }
    </ul>
  );
}

const threadShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  totalComments: PropTypes.number,
};

ThreadList.defaultProps = {
  filtered: '',
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  filtered: PropTypes.string,
};
