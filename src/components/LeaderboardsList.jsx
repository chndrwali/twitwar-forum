import React from 'react';
import PropTypes from 'prop-types';
import { leaderboardProp } from '../utils/propHelper';
import LeaderboardItem from './LeaderboardsItem';
import LeaderboardTitle from './LeaderboardsTitle';

function LeaderboardList({ leaderboardList }) {
  return (
    <div className="bg-gray-100 p-4">
      <LeaderboardTitle />
      <div className="grid grid-cols-1 gap-4">
        {leaderboardList.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
        ))}
      </div>
    </div>

  );
}

LeaderboardList.propTypes = {
  leaderboardList: PropTypes.arrayOf(PropTypes.shape(leaderboardProp)).isRequired,
};
export default LeaderboardList;