import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { commentProp } from '../utils/propHelper';

function CommentList({ comments }) {
  return (
    <div className="mt-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentProp)).isRequired,
};

export default CommentList;
