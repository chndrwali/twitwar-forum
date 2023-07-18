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
    <div className="w-full md:w-4/5 mx-auto shadow-xl mt-14 mb-12 bg-red-300">
      <main>
        <section className="pt-4 px-4 md:px-16">
          <CategoryList className="w-full flex items-center mt-3.5 pb-5 overflow-x-auto" onCategoryChange={onCategoryChange} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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