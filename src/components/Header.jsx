import React from 'react';
import PropTypes from 'prop-types';

function Header({ authUser }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="flex items-center bg-black">
      <img
        className="rounded-full w-15 mt-2 mb-8"
        src={avatar}
        alt={id}
        title={name}
      />
      <p className="font-outfit font-bold text-white text-2xl ml-2">
        Welcome,
        {' '}
        {name}
      </p>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Header.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
};

export default Header;