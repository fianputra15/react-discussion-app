import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import { asyncSetAuthUser } from '../states/auth/action';
import Wrapper from '../components/common/Wrapper';
import { REGISTER_PAGE } from '../constants/path';

export default function LoginPage() {
  const dispatch = useDispatch();
  const handleSubmitForm = async ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <Wrapper width="full">
      <div>
        <div className="flex justify-center">
          <div className="p-3 lg:w-4/12 md:w-full sm:w-full bg-white drop-shadow h-auto ">
            <h2 className="text-center text-3xl font-bold mb-5 text-black dark:text-white">
              Login
            </h2>
            <LoginForm handleSubmitForm={handleSubmitForm} />
            <div>
              <Link
                to={REGISTER_PAGE}
                className="block text-center px-4 py-2 underline text-gray-500 text-sm dark:text-white"
              >
                Create Your Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>

  );
}
