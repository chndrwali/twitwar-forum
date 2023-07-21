import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="bg-white flex items-center justify-center">
      <main className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 md:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div>
          <img
            src="./images/twitwar.svg"
            alt="Twitwar"
            className="mt-5 w-10 h-10 mb-5"
          />
        </div>
        <h2 className="text-center">
          Daftar ke
          {' '}
          <b>Twitwar</b>
          ,
          <br />
          anda bisa misuh sepuasnya tanpa batasan
        </h2>
        <RegisterInput register={onRegister} />

        <p className="text-center mt-3">
          Sudah punya akun?
          {' '}
          <br />
          <Link className="block w-full max-w-xs mx-auto p-3 rounded-3xl text-center border-2 text-blue-400 font-bold hover:border-gray-600 mb-2" to="/">Masuk lah bro!</Link>
        </p>
      </main>
    </section>

  );
}

export default RegisterPage;