import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncAddComment } from '../states/threadDetail/action';

function CommentInput({ threadId }) {
  const [content, setValue] = React.useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };

  const onAddComment = () => {
    dispatch(asyncAddComment(threadId, content));
  };

  return (
    <form className="mt-4">
      <div className="flex items-center gap-2">
        <img className="w-10 h-10 rounded-full" src="../../public/twitwar.svg" alt="avatar" />
        <div
          className="flex-grow py-2 px-4 rounded-full bg-gray-200 border-gray-200 text-sm shadow-sm"
          contentEditable
          onInput={onChange}
          data-testid="comment-input_field"
        />
      </div>
      <button
        type="button"
        className="mt-2 py-2 px-4 rounded-full bg-blue-500 text-white text-sm font-medium"
        onClick={() => onAddComment()}
      >
        Send

      </button>
    </form>

  );
}

CommentInput.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default CommentInput;