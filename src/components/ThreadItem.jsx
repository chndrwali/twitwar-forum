import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { userProp } from '../utils/propHelper';
import ThreadItemFooter from './ThreadItemFooter';
import ThreadItemHeader from './ThreadItemHeader';

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
  return (
    <div className="bg-white p-6 shadow-xl mt-6 rounded-lg">
      <ThreadItemHeader user={(user === undefined) ? '' : user} id={id} title={title} category={category} />
      <div className="leading-5 max-h-20 overflow-hidden mt-6">{parse(body)}</div>
      <ThreadItemFooter
        createdAt={createdAt}
        totalComments={totalComments}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        id={id}
      />
    </div>

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
  user: PropTypes.shape(userProp).isRequired,
};

export default ThreadItem;