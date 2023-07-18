import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <section className="flex flex-col items-center justify-center rounded-lg border border-gray-100 bg-white shadow-sm my-6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto">
      <ThreadDetail detail={threadDetail} />
    </section>

  );
}

export default DetailPage;