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
    <form className="flex gap-2">
      <div className=" bg-white p-2 rounded-md shadow-md flex-grow" contentEditable onInput={onChange} data-testid="comment-input_field" />
      <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md" onClick={() => onAddComment()}>Send</button>
    </form>
  );
}

CommentInput.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default CommentInput;
