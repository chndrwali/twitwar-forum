import React from 'react';
import PropTypes from 'prop-types';
import { detailProp } from '../utils/propHelper';
import postedAt from '../utils/index';

function ThreadDetailHeader({ detail }) {
  const { name, avatar } = detail.owner;
  const { title, category, createdAt } = detail;
  return (
    <header className="bg-slate-200">
      <div className="flex items-center gap-2 thread-owner_info">
        <img className="rounded-full w-8" src={avatar} alt="avatar" />
        <b>
          <p>
            {name}
          </p>
        </b>
        <p>{postedAt(createdAt)}</p>
      </div>
      <h2 className="text-xl font-bold thread-header_title">
        {title}
      </h2>
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