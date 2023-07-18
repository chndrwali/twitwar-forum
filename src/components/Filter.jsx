import React from 'react';
import PropTypes from 'prop-types';

function Filter({ categories, selectedCategory, onChange }) {
  return (
    <select className="border border-gray-300 rounded p-2" value={selectedCategory} onChange={onChange}>
      <option value="">All</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
