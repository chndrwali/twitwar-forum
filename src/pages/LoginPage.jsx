import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="bg-black flex items-center justify-center">
      <article className="bg-gray-200 rounded-lg flex flex-col items-center justify-center min-h-screen w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <div>
          <img
            src="./images/twitwar.svg"
            alt="Twitwar"
            className="mt-5 w-10 h-10 mb-5"
          />
        </div>
        <h2 className="text-center">
          Masuk ke
          {' '}
          <b>Twitwar</b>
          ,
          <br />
          dan curahkan isi hati anda
        </h2>
        <Link className="mt-7 flex flex-row w-80 sm:w-full p-3 rounded-3xl items-center justify-center border-2 hover:border-gray-600" to="/register">
          <img
            src="./images/GoogleLogo.png"
            alt="Google"
            className="w-5 pr-1"
          />
          <span className="font-semibold">Daftar dengan Google</span>
        </Link>
        <Link className="mt-4 mb-4 flex flex-row w-80 sm:w-full p-3 rounded-3xl items-center justify-center border-2 hover:border-gray-600" to="/register">
          <img
            src="./images/appleLogo.svg"
            alt="Apple"
            className="w-5 pr-1"
          />
          <span className="font-semibold">Daftar dengan Apple</span>
        </Link>

        <LoginInput login={onLogin} />
        <p className="text-center mt-3">
          Tidak punya akun?
          {' '}
          <br />
          <Link className="block w-80 sm:w-full p-3 rounded-3xl text-center border-2 text-blue-400 font-bold hover:border-gray-600 mb-2" to="/register">Daftar dulu bro!</Link>
        </p>
      </article>
    </section>

  );
}

export default LoginPage;