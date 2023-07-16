import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/ThreadList';
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
    <section className="w-4/5 m-auto shadow-xl mt-14 mb-12 bg-zinc-100">
      <CategoryList onCategoryChange={onCategoryChange} />
      {
        category === '' || category === ' '
          ? <ThreadsList className="thread-list" threadList={threadList} />
          : <ThreadsList className="thread-list" threadList={filteredThreads} />
      }
    </section>
  );
}

export default HomePage;