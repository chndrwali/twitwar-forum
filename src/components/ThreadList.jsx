/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadProp } from '../utils/propHelper';

function ThreadsList({ threadList }) {
  return (
    <div className="container mx-auto">
      {threadList.map((thread, index) => (
        <ThreadItem key={index} {...thread} />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape(threadProp)).isRequired,
};

export default ThreadsList;
