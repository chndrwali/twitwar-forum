import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propHelper';

function ThreadItemHeader({
  user, id, title, category,
}) {
  const { name, avatar } = user;
  return (
    <>
      <div className="flex items-center">
        <img className="w-12 h-12 rounded-full" src={avatar} alt="avatar" />
        <div className="pl-5">
          <p className="font-bold">{name}</p>
          <Link to={`/thread/${id}`} className="text-gray-600 text-sm">{title}</Link>
        </div>
      </div>
      <div className="flex items-center ml-auto space-x-2">
        <span className="rounded-full bg-blue-500 text-white text-xs px-3 py-1">
          {`#${category}`}
        </span>
      </div>
    </>
  );
}

ThreadItemHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape(userProp).isRequired,
};

export default ThreadItemHeader;