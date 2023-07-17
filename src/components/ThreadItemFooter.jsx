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
    <footer className="flex items-center justify-between mt-3 text-gray-500">
      <ActionButton type="up" count={upVotesBy.length} onButtonClicked={onUpvoteThread} />
      <ActionButton type="down" count={downVotesBy.length} onButtonClicked={onDownVoteThread} />
      <p className="flex items-center gap-1">
        <MdComment className="mr-1" />
        {totalComments}
      </p>
      <p className="text-xs">{postedAt(createdAt)}</p>
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