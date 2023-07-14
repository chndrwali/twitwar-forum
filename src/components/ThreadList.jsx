import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({ thread, upVotesby }) {
  return (
    <div className="talks-list">
      {
         thread.map((thread) => (
           <ThreadItem key={thread.id} {...thread} vote={upVotesby} />
         ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  thread: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVotesby: PropTypes.func.isRequired,
};

export default ThreadList;