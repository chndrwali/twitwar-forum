import React from 'react';
import PropTypes from 'prop-types';
import { detailProp } from '../utils/propHelper';
import postedAt from '../utils/index';

function ThreadDetailHeader({ detail }) {
  const { name, avatar } = detail.owner;
  const { title, category, createdAt } = detail;

  return (
    <header className="flex flex-col gap-1">
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-2" src={avatar} alt="avatar" />
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-gray-500 text-sm">{postedAt(createdAt)}</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <span className="text-gray-500 text-sm">
        #
        {category}
      </span>
    </header>
  );
}

ThreadDetailHeader.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailHeader;
