import React from 'react';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propHelper';

function LeaderboardList({ leaderboardList }) {
  return (
    <div className="bg-gray-100 p-4">
      <header className="flex items-center bg-white my-7 rounded-md shadow-lg px-6 py-3">
        <p className="text-lg flex-1">User</p>
        <p className="text-right font-bold text-gray-600">Score</p>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {leaderboardList.map((leaderboard) => (
          <div
            key={leaderboard.user.id}
            className="flex items-center justify-between rounded-md mb-2 p-4"
          >
            <div className="flex items-center">
              <img
                className="rounded-full w-16 h-16 mr-6"
                src={leaderboard.user.avatar}
                alt="avatar"
              />
              <p className="text-lg font-semibold">{leaderboard.user.name}</p>
            </div>
            <p className="text-2xl font-bold">{leaderboard.score}</p>
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
