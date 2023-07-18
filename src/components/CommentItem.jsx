import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propHelper';
import ActionButton from './ActionButton';
import postedAt from '../utils/index';
import { asyncToggleUpVoteComment, asyncToggleDownVoteComment } from '../states/threadDetail/action';

function CommentItem({
  id, owner, createdAt, content, upVotesBy, downVotesBy,
}) {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onUpComment = () => {
    dispatch(asyncToggleUpVoteComment(id));
  };

  const onDownComment = () => {
    dispatch(asyncToggleDownVoteComment(id));
  };

  return (
    <div className="mt-4">
      <header className="flex items-center gap-2">
        <img className="w-10 h-10 rounded-full" src={`${owner.avatar}`} alt="avatar" />
        <div>
          <p className="font-semibold text-lg">{owner.name}</p>
          <p className="text-gray-500 text-sm">{postedAt(createdAt)}</p>
        </div>
      </header>
      <p className="mt-2">{content}</p>
      <footer className="flex justify-start items-center mt-2">
        <div className="flex gap-2">
          <ActionButton authUser={authUser} type="up" onButtonClicked={onUpComment} count={upVotesBy.length} />
          <ActionButton authUser={authUser} type="down" count={downVotesBy.length} onButtonClicked={onDownComment} />
        </div>
      </footer>
    </div>

  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(userProp).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CommentItem;
