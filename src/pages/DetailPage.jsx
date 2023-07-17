import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadDetailHeader from '../components/ThreadDetailHeader';
import ThreadDetailContent from '../components/ThreadDetailContent';
import ThreadDetailFooter from '../components/ThreadDetailFooter';
import ThreadDetailComment from '../components/ThreadDetailComment';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <section className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm my-6">
      <ThreadDetailHeader detail={threadDetail} />
      <ThreadDetailContent detail={threadDetail} />
      <ThreadDetailFooter detail={threadDetail} />
      <ThreadDetailComment detail={threadDetail} />
    </section>
  );
}

export default DetailPage;