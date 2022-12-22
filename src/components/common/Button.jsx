import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    type, bgColor, loading, children, className,
  } = props;
  const variant = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-black',
    light: 'bg-light text-black',
    transparent: 'bg-transparent text-black',
  };
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={loading}
      className={`${
        loading && 'opacity-70'
      } px-4 py-2 ${variant[bgColor]} w-full block text-white drop-shadow ml-auto rounded-full hover:opacity-70 ${className}`}
    >
      {loading ? '...' : children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.string]),
  className: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'primary',
  loading: false,
  children: '',
  className: '',
};
