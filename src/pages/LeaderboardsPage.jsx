import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/common/Wrapper';
import { asyncReceiveLeaderboardsList } from '../states/leaderboards/action';
import TitlePage from '../components/common/TitlePage';

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards } = useSelector((states) => states);
  useEffect(() => {
    dispatch(asyncReceiveLeaderboardsList());
  }, [dispatch]);

  return (
    <Wrapper width="100%">
      <div className="ml-7 p-4 mb-4 rounded-md">
        <TitlePage>User Active Standings</TitlePage>
        <div>
          <ul className="space-y-3 mb-4">
            <li className="p-4  flex justify-between">
              <span className="text-sm font-semibold">User</span>
              <span className="text-sm font-semibold">Skor</span>
            </li>
            {
                leaderboards?.map((user) => (

                  <li key={user?.user?.id} className="p-4 bg-white shadow-md flex justify-between items-center rounded-md">
                    <div className="flex items-center gap-2">
                      <img src={user?.user?.avatar} alt={user?.user?.avatar} className="w-[50px] rounded-full" />
                      <span className="text-[12px]">{user?.user?.name}</span>
                    </div>
                    <span className="text-lg font-bold ">{user?.score}</span>
                  </li>
                ))
            }
          </ul>
        </div>
      </div>

    </Wrapper>
  );
}
