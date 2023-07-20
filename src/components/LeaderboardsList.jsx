import React from 'react';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propHelper';

function LeaderboardList({ leaderboardList }) {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between bg-gray-200 px-4 py-2">
        <p className="text-lg font-semibold">User</p>
        <p className="text-lg font-semibold">Score</p>
      </header>
      <div className="divide-y divide-gray-200">
        {leaderboardList.map((leaderboard) => (
          <div
            key={leaderboard.user.id}
            className="flex items-center justify-between bg-white px-4 py-2"
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src={leaderboard.user.avatar}
                alt="avatar"
              />
              <p className="text-base">{leaderboard.user.name}</p>
            </div>
            <p className="text-base">{leaderboard.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboardList: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape(userProp).isRequired,
      score: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default LeaderboardList;
