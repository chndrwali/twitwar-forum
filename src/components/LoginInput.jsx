import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <input
        className="w-full p-2 border border-gray-300 rounded mb-4"
        type="text"
        value={email}
        onChange={onEmailChange}
        placeholder="Masukan email..."
      />
      <input
        className="w-full p-2 border border-gray-300 rounded mb-4"
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Masukan password..."
      />
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => login({ email, password })}
      >
        Masuk

      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;