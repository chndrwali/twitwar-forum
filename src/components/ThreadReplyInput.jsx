import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ThreadReplyInput({ content }) {
  const [content, setContent] = useState('');
  const navigate = useNavigate('/');

  function replyContentHandler() {
    if (content.trim()) {
      replyThread(content);
      setContent('');
      navigate('/');
    }
  }

  function handleContentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className="talk-reply-input">
      <textarea type="text" placeholder="Talk your reply" value={content} onChange={handleContentChange} />
      <p className="talk-reply-input__char-left">
        <strong>{content.length}</strong>
        /320
      </p>
      <button type="submit" onClick={replyContentHandler}>Reply</button>
    </div>
  );
}

ThreadReplyInput.propTypes = {
  content: PropTypes.func.isRequired,
};

export default ThreadReplyInput;