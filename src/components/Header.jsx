import React from 'react';
import PropTypes from 'prop-types';

function Header({ authUser }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="flex flex-col items-center bg-black">
      <img
        className="rounded-full w-15 mt-4 mb-4"
        src={avatar}
        alt={id}
        title={name}
      />
      <p className="font-outfit font-bold text-white text-2xl mb-4">
        Selamat datang di twitwar,
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