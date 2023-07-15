import React from 'react';
import PropTypes from 'prop-types';
import { leaderboardProp } from '../utils/propHelper';
import LeaderboardItem from './LeaderboardsItem';
import LeaderboardTitle from './LeaderboardsTitle';

function LeaderboardList({ leaderboardList }) {
  return (
    <div className="leaderboards-list">
      <LeaderboardTitle />
      {leaderboardList.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
      ))}

    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboardList: PropTypes.arrayOf(PropTypes.shape(leaderboardProp)).isRequired,
};
export default LeaderboardList;