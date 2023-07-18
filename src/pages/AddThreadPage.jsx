import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/thread/action';
import ThreadInput from '../components/ThreadInput';

function CreateThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCreate = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="w-screen h-screen">
      <ThreadInput onCreate={onCreate} />
    </div>

  );
}

export default CreateThreadPage;