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
    <div className="container mx-auto">
      <main>
        <section className="flex flex-col items-center">
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={handleFilterChange}
          />
          <div className="w-full">
            <ThreadList threadList={filteredThreads} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
