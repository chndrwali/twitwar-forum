import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdComment } from 'react-icons/md';
import { userProp } from '../utils/propHelper';
import postedAt from '../utils/index';
import VoteButton from './VoteButton';
import { asyncToggleDownThread, asyncToogleUpThread } from '../states/thread/action';

function ThreadItem({
  id,
  body,
  title,
  category,
  user,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) {
  const { name, avatar } = user;
  const dispatch = useDispatch();

  const onUpvoteThread = () => {
    dispatch(asyncToogleUpThread(id));
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownThread(id));
  };

  return (
    <section className="my-4">
      <div className="flex items-center">
        <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt="avatar" />
        <div className="">
          <p className="font-semibold">{name}</p>
          <Link to={`/thread/${id}`} className="text-blue-500">{title}</Link>
        </div>
      </div>
      <div className="mt-1">
        <span className="text-gray-500 text-sm">
          {`#${category}`}
        </span>
      </div>
      <div className="">{parse(body)}</div>
      <footer className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <VoteButton type="up" count={upVotesBy.length} onButtonClicked={onUpvoteThread} />
          <VoteButton type="down" count={downVotesBy.length} onButtonClicked={onDownVoteThread} />
          <div className="flex items-center ml-2">
            <MdComment className="mr-1" />
            <p className="text-gray-500">{totalComments}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{postedAt(createdAt)}</p>
      </footer>
    </section>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userProp),
};

ThreadItem.defaultProps = {
  user: {},
};

export default ThreadItem;
