import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/Login/LoginForm';
import { asyncSetAuthUser } from '../states/auth/action';
import Wrapper from '../components/common/Wrapper';

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
          </div>
        </div>
      </div>
    </Wrapper>

  );
}
