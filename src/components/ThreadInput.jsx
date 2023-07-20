/* eslint-disable jsx-a11y/label-has-associated-control */
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
    <div className="bg-white shadow-md rounded-md p-8">
      <h2 className="text-2xl font-bold mb-4">Buat Utas Baru</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Judul
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="title"
            placeholder="Masukkan judul..."
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
            Kategori
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="category"
            placeholder="Masukkan kategori..."
            value={category}
            onChange={onCategoryChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Pikiranmu</label>
          <div
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
            onInput={onChange}
            contentEditable
            placeholder="Apa yang kamu pikirkan, anak muda?"
            data-testid="input-body"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
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