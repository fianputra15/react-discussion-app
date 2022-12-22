import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadPage from './pages/ThreadPage';
import Navbar from './components/common/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncUnsetAuthUser } from './states/auth/action';
import Loading from './components/common/Loading';
import { asyncPreloadProcess } from './states/isPreload/action';
import HomePage from './pages/HomePage';
import Sidebar from './components/common/Sidebar';
import Spinner from './components/common/Spinner';
import AddThreadPage from './pages/AddThreadPage';
import {
  ADD_PAGE, DETAIL_PAGE, HOME_PAGE, LEADERBOARDS_PAGE, REGISTER_PAGE,
} from './constants/path';
import LeaderboardsPage from './pages/LeaderboardsPage';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const handleSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return (
      <div className="h-screen grid">
        <Spinner />
      </div>
    );
  }
  if (authUser === null) {
    return (
      <>
        <Loading />
        <header>
          <Navbar handleSignOut={handleSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path={REGISTER_PAGE} element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <div>
      <Loading />
      <header>
        <Navbar handleSignOut={handleSignOut} />
      </header>
      <main className="flex">
        <div className="flex lg:w-[1000px] md:w-[800px] sm:w-full mx-auto">
          <Sidebar />
          <Routes>
            <Route path={HOME_PAGE} element={<HomePage />} />
            <Route path={DETAIL_PAGE} element={<ThreadPage />} />
            <Route path={ADD_PAGE} element={<AddThreadPage />} />
            <Route path={LEADERBOARDS_PAGE} element={<LeaderboardsPage />} />

          </Routes>

        </div>
      </main>
    </div>
  );
}

export default App;
