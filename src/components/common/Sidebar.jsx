import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineHome, MdLeaderboard } from 'react-icons/md';
import { HOME_PAGE, LEADERBOARDS_PAGE } from '../../constants/path';

export default function Sidebar() {
  return (
    <div className="space-y-2 w-2/12 sm:hidden md:hidden lg:block">
      <ul className="space-y-4 fixed">
        <li className="cursor-pointer p-2">
          <div className="flex items-center gap-3">
            <div className="w-[16px]" />
            <h6 className="text-gray-400 font-bold">Menu</h6>
          </div>

        </li>
        <li className="hover:bg-red-100 hover:text-primary cursor-pointer">
          <Link className="flex items-center gap-3 p-2" to={HOME_PAGE}>
            <MdOutlineHome color="#e64e41" width={16} />
            <span className="text-gray-400 text-sm font-medium">Home</span>
          </Link>
        </li>
        <li className="hover:bg-red-100 hover:text-primary cursor-pointer">
          <Link className="flex items-center gap-3 p-2" to={LEADERBOARDS_PAGE}>
            <MdLeaderboard color="#e64e41" width={16} />
            <span className="text-gray-400 text-sm font-medium">Leaderboards</span>
          </Link>

        </li>
      </ul>
    </div>
  );
}
