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
    <>
      <h1 className="font-medium text-lg text-zinc-400">Popular category</h1>
      <div className="w-full flex items-center gap-7 mt-3.5 pb-5 overflow-x-auto">
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

    </>
  );
}

CategoryList.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryList;
