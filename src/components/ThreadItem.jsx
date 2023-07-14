import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, createdAt, upVotesBy, ownerId, authUser,
}) {
  const navigate = useNavigate();
  const isThreadVotes = upVotesBy.includes(authUser);

  const onVoteClick = (event) => {
    event.stopPropagation();
    upVotesBy(id);
  };

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/thread/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} className="talk-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="talk-item__user-photo">
        <img src={ownerId.photo} alt={ownerId} />
      </div>
      <div className="talk-item__detail">
        <header>
          <div className="talk-item__user-info">
            <p className="talk-item__user-name">{ownerId.name}</p>
            <p className="talk-item__user-id">
              @
              {ownerId.id}
            </p>
          </div>
          <p className="talk-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="talk-item__text">{body}</p>
        </article>
        {
          upVotesBy && (
            <div className="talk-item__likes">
              <p>
                <button type="button" aria-label="like" onClick={onVoteClick}>
                  { isThreadVotes ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                </button>
                {' '}
                {upVotesBy.length}
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  ownerId: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVotesBy: PropTypes.func,
};

ThreadItem.defaultProps = {
  upVotesBy: null,
};

export { threadItemShape };

export default ThreadItem;