import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propHelper';

function ThreadItemHeader({
  user, id, title, category,
}) {
  const { name, avatar } = user;
  return (
    <header className="flex items-center">
      <div className="bg-slate-100">
        <img className="rounded-full w-12" src={avatar} alt="avatar" />
        <b>
          <p>
            {name}
            {' '}
            :
          </p>
        </b>
      </div>
      <Link to={`/thread/${id}`}><h4 className="text-center font-semibold">{title}</h4></Link>
      <span className="rounded-sm">
        {`#${category}`}
      </span>
    </header>
  );
}

ThreadItemHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape(userProp).isRequired,
};

export default ThreadItemHeader;
