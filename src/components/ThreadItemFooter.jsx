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
    <footer className="thread-item_footer">
      <ActionButton type="up" count={upVotesBy.length} onButtonClicked={onUpvoteThread} />
      <ActionButton type="down" count={downVotesBy.length} onButtonClicked={onDownVoteThread} />
      <p className="thread-item_comment">
        <MdComment />
        {totalComments}
      </p>
      <p>{postedAt(createdAt)}</p>
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