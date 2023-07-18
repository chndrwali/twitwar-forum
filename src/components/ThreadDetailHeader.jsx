import React from 'react';
import PropTypes from 'prop-types';
import { detailProp } from '../utils/propHelper';
import postedAt from '../utils/index';

function ThreadDetailHeader({ detail }) {
  const { name, avatar } = detail.owner;
  const { title, category, createdAt } = detail;
  return (
    <header className="bg-slate-200 p-4">
      <div className="flex items-center gap-2">
        <img className="h-16 w-16 object-cover rounded-full mr-4" src={avatar} alt="avatar" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">{postedAt(createdAt)}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-4 mb-2">{title}</h2>
      <span className="rounded-sm bg-gray-200 text-gray-700 py-0.5 px-2 text-sm">
        {`#${category}`}
      </span>
    </header>

  );
}

ThreadDetailHeader.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailHeader;