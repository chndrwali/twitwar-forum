import React from 'react';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import PropTypes from 'prop-types';

function ActionButton({ type, count, onButtonClicked }) {
  return (
    <button className={`action-btn ${type === 'up' ? 'text-blue-500' : 'text-red-500'} ${type === 'up' ? 'liked' : ''} flex items-center gap-1`} type="button" onClick={onButtonClicked}>
      {type === 'up' ? <MdThumbUp className="text-xl" /> : <MdThumbDown className="text-xl" />}
      <p className="text-sm">{count}</p>
    </button>

  );
}

ActionButton.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};

export default ActionButton;