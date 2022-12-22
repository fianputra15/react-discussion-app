import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ThreadHead(props) {
  const {
    title,
    avatar,
    name,
    id,
    isDetail,
  } = props;
  return (
    <div className="flex justify-between items-center">
      {
        !isDetail ? (
          <Link to={`/thread/${id}`} className="text-primary font-semibold text-2xl w-8/12 hover:underline">
            {title}
          </Link>
        ) : (
          <h2 className="text-primary font-semibold text-2xl w-8/12">
            {title}
          </h2>
        )
      }

      <div className=" text-[12px] text-right">
        <span className="flex items-center gap-2">
          <img
            className="w-[30px] rounded-full"
            src={avatar}
            alt={avatar}
          />
          <span>{name}</span>
        </span>
      </div>
    </div>
  );
}

ThreadHead.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isDetail: PropTypes.bool.isRequired,
};

ThreadHead.defaultProps = {
  id: '',
  title: '',
  avatar: '',
  name: '',
};
