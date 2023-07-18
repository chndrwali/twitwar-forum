import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import ActionButton from './VoteButton';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { detailProp } from '../utils/propHelper';
import { asyncToggleDownVoteThreadDetail, asyncToogleUpVoteThreadDetail } from '../states/threadDetail/action';
import postedAt from '../utils/index';

function ThreadDetail({ detail }) {
  const {
    id, owner, title, category, createdAt, body, upVotesBy, downVotesBy, comments,
  } = detail;

  const dispatch = useDispatch();

  const onUpvoteThread = () => {
    dispatch(asyncToogleUpVoteThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownVoteThreadDetail());
  };

  return (
    <div>
      <header className="flex flex-col gap-1">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-2" src={owner.avatar} alt="avatar" />
          <div>
            <p className="font-semibold text-lg">{owner.name}</p>
            <p className="text-gray-500 text-sm">{postedAt(createdAt)}</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-gray-500 text-sm">
          #
          {category}
        </span>
      </header>
      <div className="mt-4">
        {parse(body)}
      </div>
      <footer className="flex justify-start items-center mt-4">
        <div className="flex gap-2">
          <ActionButton type="up" count={upVotesBy.length} onButtonClicked={onUpvoteThread} />
          <ActionButton type="down" count={downVotesBy.length} onButtonClicked={onDownVoteThread} />
        </div>
      </footer>
      <div className="mt-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Add Comment</h3>
          <CommentInput threadId={id} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{`Comments (${comments.length})`}</h3>
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetail;
