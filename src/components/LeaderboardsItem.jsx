import React from 'react';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propHelper';

function LeaderboardItem({ user, score }) {
  const { name, avatar } = user;

  return (
    <div className="flex items-center justify-between rounded-md mb-2 p-4">
      <div className="flex items-center">
        <img className="rounded-full w-16 mr-6" src={avatar} alt="avatar" />
        <p className="text-lg font-semibold">{name}</p>
      </div>
      <p className="text-2xl font-bold">{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userProp).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;