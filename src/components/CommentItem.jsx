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
    <div className="bg-white p-4 rounded-md shadow-md">
      <header className="flex items-center mb-2">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 rounded-full" src={`${owner.avatar}`} alt="avatar" />
          <div>
            <b><p className="text-sm">{owner.name}</p></b>
            <p className="text-xs text-gray-500">{postedAt(createdAt)}</p>
          </div>
        </div>
      </header>
      <p className="text-sm">{content}</p>
      <footer className="flex items-center justify-between mt-2">
        <ActionButton
          authUser={authUser}
          type="up"
          onButtonClicked={onUpComment}
          count={upVotesBy.length}
        />
        <ActionButton
          authUser={authUser}
          type="down"
          count={downVotesBy.length}
          onButtonClicked={onDownComment}
        />
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
