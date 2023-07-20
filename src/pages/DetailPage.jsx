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
    <section className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <ThreadDetail detail={threadDetail} />
        </div>
      </div>
    </section>

  );
}

export default DetailPage;