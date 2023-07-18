import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({
  category, onSelect, unSelect, selected,
}) {
  const handleClick = () => {
    if (category === selected) {
      unSelect();
    } else {
      onSelect(category);
    }
  };

  const buttonClassName = `py-2 px-4 rounded-md ${
    category === selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
  }`;

  return (
    <button type="button" className={buttonClassName} onClick={handleClick}>
      #
      {category}
    </button>
  );
}

CategoryItem.propTypes = {
  selected: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  unSelect: PropTypes.func.isRequired,
};

export default CategoryItem;
