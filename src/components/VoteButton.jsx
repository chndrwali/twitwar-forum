import React from 'react';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import PropTypes from 'prop-types';

function VoteButton({ type, count, onButtonClicked }) {
  const isVoted = count !== 0; // Check if the button has been voted

  let buttonClassName = 'action-btn';
  if (isVoted) {
    buttonClassName += type === 'up' ? ' text-blue-500' : ' text-red-500';
  } else {
    buttonClassName += ' text-gray-500';
  }
  if (type === 'up') {
    buttonClassName += ' liked';
  }

  return (
    <button
      className={`${buttonClassName} flex items-center gap-1`}
      type="button"
      onClick={onButtonClicked}
    >
      {type === 'up' ? <MdThumbUp className="text-xl" /> : <MdThumbDown className="text-xl" />}
      <p className="text-sm">{count}</p>
    </button>
  );
}

VoteButton.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  count: PropTypes.number.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};

export default VoteButton;
