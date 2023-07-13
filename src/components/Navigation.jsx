import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { email, avatar, name } = authUser;

  return (
    <div className="navigation">
      <img src={avatar} alt={email} title={name} />
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <button type="button" onClick={signOut}>Sign out</button>
    </div>
  );
}

const authUserShape = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;