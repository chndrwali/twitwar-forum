import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdComment } from 'react-icons/md';
import ActionButton from './ActionButton';
import { asyncToggleDownThread, asyncToogleUpThread } from '../states/thread/action';
import postedAt from '../utils/index';

function ThreadItemFooter({
  id,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) {
  const dispatch = useDispatch();

  const onUpvoteThread = () => {
    dispatch(asyncToogleUpThread(id));
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownThread(id));
  };

  return (
    <footer className="flex items-center justify-between mt-4">
      <div className="flex items-center space-x-4">
        <ActionButton type="up" count={upVotesBy.length} onButtonClicked={onUpvoteThread} />
        <ActionButton type="down" count={downVotesBy.length} onButtonClicked={onDownVoteThread} />
        <div className="flex items-center space-x-1">
          <MdComment className="text-gray-500 text-lg" />
          <p className="text-sm text-gray-500">
            {totalComments}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500">{postedAt(createdAt)}</p>
    </footer>

  );
}

ThreadItemFooter.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreadItemFooter;