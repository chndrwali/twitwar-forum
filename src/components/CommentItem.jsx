import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
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
    <div className="comment-item">
      <header className="comment-item_header">
        <div className="comment-item_owner-info">
          <img src={`${owner.avatar}`} alt="avatar" />
          <b><p>{owner.name}</p></b>
        </div>
      </header>
      <p>{content}</p>
      <footer>
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
        <p className="posted-at">{postedAt(createdAt)}</p>
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