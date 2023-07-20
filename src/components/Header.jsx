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
    <div className={`flex items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 md:px-8 md:py-4`}>
      <img
        className="rounded-full w-10 ml-2 mr-4 mt-2 mb-2 md:ml-4 md:mr-6 md:mt-4 md:mb-4"
        src={avatar}
        alt={id}
        title={name}
      />
      <p className="font-outfit font-bold text-2xl md:text-3xl">
        Selamat datang di twitwar,
        {' '}
        {name}
      </p>
      <ul className="ml-auto flex items-center space-x-2 md:space-x-4">
        <li className="text-sm md:text-base">Mark</li>
        <li className="text-sm md:text-base">About Me</li>
        {/* Add more menu items as needed */}
      </ul>
      <label className="switch ml-4 md:ml-6 relative inline-flex items-center justify-center h-6 w-12 bg-gray-300 rounded-full">
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
