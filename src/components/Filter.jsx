import React from 'react';
import PropTypes from 'prop-types';

function Filter({ categories, selectedCategory, onChange }) {
  return (
    <div className="relative flex items-center">
      <select
        className="bg-white text-gray-900 py-2 px-4 pr-8 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
        value={selectedCategory}
        onChange={onChange}
      >
        <option value="">Trending</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            #
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
