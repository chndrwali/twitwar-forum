import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import useInput from '../hooks/useInput';
import CategoryList from '../components/CategoryList';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const [category, onCategoryChange] = useInput('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const filteredThreads = threadList.filter((thread) => thread.category === category);
  return (
    <section className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm my-6">
      <CategoryList onCategoryChange={onCategoryChange} />
      {category === '' || category === ' ' ? (
        <ThreadList className="rounded-md text-sm" threadList={threadList} />
      ) : (
        <ThreadList className="rounded-md text-sm" threadList={filteredThreads} />
      )}
    </section>

  );
}

export default HomePage;