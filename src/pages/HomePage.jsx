import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Wrapper from '../components/common/Wrapper';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import { ADD_PAGE } from '../constants/path';
import TitlePage from '../components/common/TitlePage';
import ThreadList from '../components/Thread/ThreadList';
import ThreadFilter from '../components/Thread/ThreadFilter';

export default function HomePage() {
  const {
    threads = [],
    filtered = '',
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <Wrapper width="default">
      <TitlePage>Available Threads</TitlePage>
      <ThreadFilter
        threads={threads}
        filtered={filtered}
      />
      <ThreadList threads={threads} filtered={filtered} />
      <div className="fixed bottom-[48px] lg:right-4 md:right-0 sm:right-0">
        <Link to={ADD_PAGE}>
          {' '}
          <MdAddCircle size={60} className="text-primary" />
        </Link>
      </div>
    </Wrapper>

  );
}
