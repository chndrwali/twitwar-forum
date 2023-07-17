import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import CategoryItem from './CategoryItem';

function CategoryList({ onCategoryChange }) {
  const [selected, setSelected] = useInput('');

  const { threads = [] } = useSelector((state) => state);

  const categoryThread = threads.map(({ category }) => category);
  const uniqueCategoryThread = [...new Set(categoryThread)];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onSelectCategory = (category) => {
    onCategoryChange(category);
    setSelected(category);
  };

  const unSelectCategory = () => {
    onCategoryChange('');
    setSelected('');
  };

  return (
    <header>
      <p className="text-xl font-bold">Popular category</p>
      <div className="flex flex-wrap mt-4 -mx-2">
        {uniqueCategoryThread.map((category, index) => (
          <CategoryItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            category={category}
            onSelect={onSelectCategory}
            unSelect={unSelectCategory}
            selected={selected}
          />
        ))}
      </div>
    </header>
  );
}

CategoryList.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryList;
