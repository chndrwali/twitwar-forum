/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Header({ authUser }) {
  const { id, avatar, name } = authUser;
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col items-center ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <img
        className="rounded-full w-15 mt-4 mb-4"
        src={avatar}
        alt={id}
        title={name}
      />
      <p className={`font-outfit font-bold ${darkMode ? 'text-white' : 'text-black'} text-2xl mb-4`}>
        Selamat datang di twitwar,
        {' '}
        {name}
      </p>
      <label className="switch relative inline-flex items-center justify-center h-6 w-12 bg-gray-300 rounded-full">
        <input
          type="checkbox"
          className="hidden"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <span className="slider absolute rounded-full h-4 w-4 bg-white shadow-md transform transition-transform duration-300 ease-in-out" />
      </label>

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