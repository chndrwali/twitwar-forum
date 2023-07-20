import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import Filter from '../components/Filter';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const filteredThreads = selectedCategory
    ? threadList.filter((thread) => thread.category === selectedCategory)
    : threadList;

  const categories = Array.from(new Set(threads.map((thread) => thread.category)));

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <main className="max-w-3xl mx-auto">
        <section className="bg-white p-4 shadow-md rounded-lg">
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={handleFilterChange}
          />
          <div className="mt-4">
            <ThreadList threadList={filteredThreads} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
