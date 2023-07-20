import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/thread/action';
import ThreadInput from '../components/ThreadInput';

function AddThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCreate = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <ThreadInput onCreate={onCreate} />
      </div>
    </div>

  );
}

export default AddThreadPage;