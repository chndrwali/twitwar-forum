import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ActionButton from './VoteButton';
import { detailProp } from '../utils/propHelper';
import { asyncToggleDownVoteThreadDetail, asyncToogleUpVoteThreadDetail } from '../states/threadDetail/action';

function ThreadDetailFooter({ detail }) {
  const { upVotesBy, downVotesBy } = detail;

  const dispatch = useDispatch();

  const onUpvoteThread = () => {
    dispatch(asyncToogleUpVoteThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownVoteThreadDetail());
  };

  return (
    <footer className="flex justify-start items-center mt-4">
      <div className="flex gap-2">
        <ActionButton type="up" count={upVotesBy.length} onButtonClicked={onUpvoteThread} />
        <ActionButton type="down" count={downVotesBy.length} onButtonClicked={onDownVoteThread} />
      </div>
    </footer>

  );
}

ThreadDetailFooter.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailFooter;
