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
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside
          className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
        >
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>
        <main className="flex flex-col items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Buat akun kamu sekarang!</h2>
          <RegisterInput register={onRegister} />

          <p className="w-80 p-3 text-center mt-3">
            Sudah punya akun?
            {' '}
            <Link className="w-80 p-3 rounded-3xl text-center mt-3 border-2 text-blue-400 font-bold hover:border-gray-600 mb-2" to="/">Masuk lah bro!</Link>
          </p>
        </main>
      </div>
    </section>
  );
}

export default RegisterPage;