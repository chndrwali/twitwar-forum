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
        <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt="avatar" />
        <div className="">
          <p className="font-semibold">{name}</p>
          <Link to={`/thread/${id}`} className="text-blue-500">{title}</Link>
        </div>
      </div>
      <div className="mt-1">
        <span className="text-gray-500 text-sm">
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