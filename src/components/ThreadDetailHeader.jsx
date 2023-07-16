import React from 'react';
import PropTypes from 'prop-types';
import { detailProp } from '../utils/propHelper';
import postedAt from '../utils/index';

function ThreadDetailHeader({ detail }) {
  const { name, avatar } = detail.owner;
  const { title, category, createdAt } = detail;
  return (
    <header className="bg-red-800">
      <div className="thread-owner_info">
        <img src={avatar} alt="avatar" />
        <b>
          <p>
            {name}
            {' '}
          </p>
        </b>
        <p>{postedAt(createdAt)}</p>
      </div>
      <h2 className="thread-header_title">
        {title}
      </h2>
      <span className="thread-item_category">
        {`#${category}`}
      </span>
    </header>
  );
}

ThreadDetailHeader.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};
export default ThreadDetailHeader;