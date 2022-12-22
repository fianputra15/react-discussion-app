import React from 'react';
import PropTypes from 'prop-types';

export default function TitlePage(props) {
  const { children } = props;
  return (
    <h2 className="font-bold text-2xl">{children}</h2>
  );
}

TitlePage.propTypes = {
  children: PropTypes.string.isRequired,
};
