import React from 'react';
import Proptypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

function Wrapper(props) {
  const { children, width, className } = props;
  return (
    <motion.div
      // Animation for transition between page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`mx-auto mt-10 mb-2 ${width === 'default' && 'lg:w-8/12'} md:w-full sm:w-full sm:p-4 md:p-4 lg:p-0 p-4 dark:bg-[#323232] ${!className ? '' : className}`}
      style={{
        width,
      }}
    >
      {children}
      <ToastContainer autoClose={2000} />
    </motion.div>
  );
}

Wrapper.propTypes = {
  children: Proptypes.node.isRequired,
  width: Proptypes.string.isRequired,
  className: Proptypes.string,
};

Wrapper.defaultProps = {
  className: 'default',
};

export default Wrapper;
