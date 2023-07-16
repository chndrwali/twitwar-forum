import React from 'react';
import {
  MdAddBox, MdGroup, MdLeaderboard, MdLogout,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ signout }) {
  return (
    <div
      className="bg-gray-100 fixed w-full bottom-0 h-12 bg-primary flex justify-center items-center gap-10"
    >
      <Link
        className="text-2xl font-normal text-black"
        to="/create"
      >
        <button
          type="button"
          className="text-center mt-3 border-2 text-black font-bold hover:border-gray-600 mb-2"
          title="Threads"
        >
          <MdAddBox />
        </button>
      </Link>
      <Link
        className="text-2xl font-normal text-black"
        to="/"
      >
        <button
          type="button"
          className="text-center mt-3 border-2 text-black font-bold hover:border-gray-600 mb-2"
          title="Threads"
        >
          <MdGroup />
        </button>
      </Link>
      <Link
        className="text-2xl font-normal text-black"
        to="/leaderboards"
      >
        <button
          type="button"
          className="text-center mt-3 border-2 text-black font-bold hover:border-gray-600 mb-2"
          title="Leaderboard"
        >
          <MdLeaderboard />
        </button>
      </Link>
      <div className="text-2xl font-normal text-black">
        <button
          type="button"
          className="text-center mt-3 border-2 text-black font-bold hover:border-gray-600 mb-2"
          onClick={signout}
          title="Sign out"
        >
          <MdLogout />
        </button>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  signout: PropTypes.func.isRequired,
};

export default Navigation;