import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ onCreate }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setValue] = React.useState('');

  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-center text-lg font-medium sm:text-2xl">Buat Utas Baru</h2>
      <form className="mb-0 mt-4 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border-t-8 border-black">
        <input
          className="bg-gray-200 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          type="text"
          placeholder="Title"
          value={title}
          onChange={onTitleChange}
        />
        <input
          className="bg-gray-200 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          type="text"
          placeholder="Category"
          value={category}
          onChange={onCategoryChange}
        />
        <textarea
          className="bg-gray-200 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          onInput={onChange}
          data-testid="input-body"
        />
        <button
          className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
          type="button"
          onClick={() => onCreate({ title, category, body })}
        >
          Buat Thread

        </button>
      </form>
    </div>
  );
}

ThreadInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default ThreadInput;