import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { detailProp } from '../utils/propHelper';

function ThreadDetailContent({ detail }) {
  const { body } = detail;
  return (
    <div className="bg-white p-6 shadow-xl rounded-lg mt-6">
      {parse(body)}
    </div>
  );
}

ThreadDetailContent.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default ThreadDetailContent;