import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ActionButton from './ActionButton';
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
    <footer className="flex items-center justify-between mt-4 p-4">
      <div className="flex items-center">
        <ActionButton type="up" className="mr-4" count={upVotesBy.length} onButtonClicked={onUpvoteThread} />
        <ActionButton type="down" className="ml-4" count={downVotesBy.length} onButtonClicked={onDownVoteThread} />
      </div>
    </footer>
  );
}

ThreadDetailFooter.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailFooter;
