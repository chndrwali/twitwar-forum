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
    <div className="mx-auto max-w-screen-sm px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-center text-lg font-medium sm:text-2xl">Buat Utas Baru</h2>
      <form className="mb-0 mt-4 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border-t-8 border-black">
        <input
          className="bg-white w-full rounded-lg border-gray-200 p-3 sm:p-4 text-sm sm:text-base shadow-sm"
          type="text"
          placeholder="Masukan judul..."
          value={title}
          onChange={onTitleChange}
        />
        <input
          className="bg-white w-full rounded-lg border-gray-200 p-3 sm:p-4 text-sm sm:text-base shadow-sm"
          type="text"
          placeholder="Masukan category..."
          value={category}
          onChange={onCategoryChange}
        />
        <textarea
          className="bg-white w-full rounded-lg border-gray-200 p-3 sm:p-4 text-sm sm:text-base shadow-sm"
          onInput={onChange}
          placeholder="Apa yang kamu pikirkan anak muda?"
          data-testid="input-body"
        />
        <button
          className="block w-full rounded-lg bg-black hover:bg-slate-800 px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base font-medium text-white"
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