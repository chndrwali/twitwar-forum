import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { detailProp } from '../utils/propHelper';

function ThreadDetailComment({ detail }) {
  const { comments } = detail;
  return (
    <div className="mt-4">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Add comment</h3>
        <CommentInput threadId={detail.id} />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{`Comments (${comments.length})`}</h3>
        <CommentList comments={comments} />
      </div>
    </div>

  );
}

ThreadDetailComment.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailComment;