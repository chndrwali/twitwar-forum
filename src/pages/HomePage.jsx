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
    <div className="container mx-auto">
      <main>
        <section className="flex flex-col items-center">
          <CategoryList onCategoryChange={onCategoryChange} />
          <div className="w-full">
            {category === '' || category === ' ' ? (
              <ThreadList threadList={threadList} />
            ) : (
              <ThreadList threadList={filteredThreads} />
            )}
          </div>
        </section>
      </main>
    </div>

  );
}

export default HomePage;