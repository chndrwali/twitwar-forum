import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import LeaderboardList from '../components/LeaderboardsList';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <div className="w-4/5 m-auto pt-10 shadow-xl">
      <h2 className="grid grid-cols-3 grid-rows-1 py-8 text-start text-lg bg-white px-8 sm:px-16 md:px-32 font-bold">Top User</h2>
      <LeaderboardList leaderboardList={leaderboardList} />
    </div>
  );
}

export default LeaderboardsPage;