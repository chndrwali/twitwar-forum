import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src={owner.avatar} alt="avatar" />
          <div>
            <p className="font-bold">{owner.name}</p>
            <p className="text-gray-500">{postedAt(createdAt)}</p>
          </div>
        </div>
        <div>
          <Link to="/" className="text-white bg-blue-500 px-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer">
            Kembali
          </Link>
        </div>
      </header>
      <h2 className="text-xl font-semibold">{title}</h2>
      <span className="text-white bg-blue-500 px-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer">
        #
        {category}
      </span>
      <div className="mt-4">
        <p className="text-gray-700">{parse(body)}</p>
      </div>
      <footer className="flex justify-between items-center">
        <div className="flex space-x-2">
          <ActionButton type="up" count={upVotesBy.length} onButtonClicked={onUpvoteThread} />
          <ActionButton type="down" count={downVotesBy.length} onButtonClicked={onDownVoteThread} />
        </div>
      </footer>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Tambahkan Komentar</h3>
          <CommentInput threadId={id} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{`Comments (${comments.length})`}</h3>
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
