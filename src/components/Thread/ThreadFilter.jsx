import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilterAction } from '../../states/filtered/action';

export default function ThreadFilter(props) {
  const { threads, filtered } = props;
  const dispatch = useDispatch();
  const handleSortingThreadByCategory = (key) => {
    dispatch(setFilterAction(key));
  };
  return (
    <div className="lg:w-full  md:w-[300px] sm:w-[300px] w-screen">
      <ul className="flex flex-row mb-4 pb-4 space-x-4 sm:overflow-x-scroll lg:overflow-x-hidden md:overflow-x-hidden ">
        {
          threads?.filter((value, index, self) => index === self.findIndex((t) => (
            t?.category === value?.category
          )))?.map((thread) => (
            <li key={`${thread?.category}-${thread?.createdAt}`}>
              <button
                onClick={() => handleSortingThreadByCategory(thread?.category)}
                type="button"
                className={`${filtered === thread?.category ? 'bg-primary text-white' : 'bg-white '} hover:opacity-40 p-2 shadow-md rounded-md`}
              >
                <span>
                  #
                  {thread?.category}
                </span>
              </button>

            </li>
          ))
        }
      </ul>
    </div>

  );
}

const threadShape = {
  category: PropTypes.string.isRequired,
};

ThreadFilter.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  filtered: PropTypes.string.isRequired,
};
