import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

export default function ThreadBody(props) {
  const { body, fullContent } = props;
  return (
    <div
      className={`text-body text-gray-800 ${fullContent ? '' : 'thread-item'} `}
    >
      {body && parse(body)}
    </div>
  );
}

ThreadBody.propTypes = {
  body: PropTypes.string,
  fullContent: PropTypes.bool,
};

ThreadBody.defaultProps = {
  fullContent: false,
  body: '',
};
