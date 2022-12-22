import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdOutlineHome,
  MdLeaderboard,
} from 'react-icons/md';
import { HOME_PAGE, REGISTER_PAGE, LEADERBOARDS_PAGE } from '../../constants/path';
import { asyncUnsetAuthUser } from '../../states/auth/action';

export default function Navbar() {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <nav className=" items-center justify-between px-8 py-4 lg:flex md:flex sm:block">
      <Link className="hover:underline" to={HOME_PAGE}>
        <h1 className="text-primary sm:text-center md:text-left lg:text-left font-semibold text-2xl hover:underline">
          Threads
        </h1>
      </Link>
      <div className="flex gap-10 items-center">
        <div className="flex text-primary gap-5 font-bold items-center">
          {!authUser && (
            <div className="flex text-primary gap-5 items-center font-bold">
              <Link className="hover:underline" to={HOME_PAGE}>
                Login
              </Link>
              <Link className="hover:underline" to={REGISTER_PAGE}>
                Register
              </Link>
            </div>
          )}
          <Link className=" items-center gap-3 p-2 sm:flex md:hidden lg:hidden" to={LEADERBOARDS_PAGE}>
            <MdLeaderboard color="#e64e41" width={16} />
            <span className="text-gray-400 text-sm font-medium">Leaderboards</span>
          </Link>
          <Link className="flex items-center gap-3 p-2 sm:flex md:hidden lg:hidden" to={HOME_PAGE}>
            <MdOutlineHome color="#e64e41" width={16} />
            <span className="text-gray-400 text-sm font-medium">Home</span>
          </Link>
          {authUser && (
            <button
              onClick={() => handleLogout()}
              className="hover:brightness-75 flex bg-red-500 text-white p-2 rounded"
              type="button"
            >
              <span className="material-icons">logout</span>
              {' '}
              {authUser?.name}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
