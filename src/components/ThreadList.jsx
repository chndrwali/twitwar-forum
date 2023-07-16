import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadProp } from '../utils/propHelper';

function ThreadsList({ threadList }) {
  return (
    <div className="w-full flex items-center gap-7 mt-3.5 pb-5 overflow-x-auto">
      {threadList.map((thread, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ThreadItem key={index} {...thread} />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape(threadProp)).isRequired,
};

export default ThreadsList;