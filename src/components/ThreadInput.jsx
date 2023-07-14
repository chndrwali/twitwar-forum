import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [title, body, setBody, setTitle] = useState('');

  function addthread() {
    if (body.trim()) {
      addThread(title);
      setTitle('');
      addThread(body);
      setBody('');
    }
  }

  function handleBodyChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }

  return (
    <div className="talk-input">
      <textarea type="text" placeholder="What are you thinking?" value={body} onChange={handleBodyChange} />
      <p className="talk-input__char-left">
        <strong>{body.length}</strong>
        /320
      </p>
      <button type="submit" onClick={addthread}>Talk</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;