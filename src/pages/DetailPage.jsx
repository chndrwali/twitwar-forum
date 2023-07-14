import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import ThreadItem from '../components/ThreadItem';
import ThreadReplyInput from '../components/ThreadReplyInput';
import { asyncReceiveThreadDetail, asyncToogleVoteThreadDetail } from '../states/threadDetail/action';
import { asyncAddThread } from '../states/thread/action';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states); // @TODO: get talkDetail and authUser state from store
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to get talk detail by id
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onLikeTalk = () => {
    // @TODO: dispatch async action to toggle like talk detail
    dispatch(asyncToogleVoteThreadDetail());
  };

  const onReplyTalk = (content) => {
    // @TODO: dispatch async action to add reply talk
    dispatch(asyncAddThread({ content, replyTo: id }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      {
        threadDetail.parent && (
          <div className="detail-page__parent">
            <h3>Replying To</h3>
            <ThreadItem {...threadDetail.parent} authUser={authUser.id} />
          </div>
        )
      }
      <ThreadDetail {...threadDetail} authUser={authUser.id} likeTalk={onLikeTalk} />
      <ThreadReplyInput replyTalk={onReplyTalk} />
    </section>
  );
}

export default DetailPage;