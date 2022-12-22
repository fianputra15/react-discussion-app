import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/Register/RegisterForm';
import { HOME_PAGE } from '../constants/path';
import { asyncRegisterUser } from '../states/users/action';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitForm = async ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate(HOME_PAGE);
  };
  return (
    <div className="bg-secondary h-screen">
      <div className="flex justify-center">
        <div className="p-3 lg:w-4/12 md:w-full sm:w-full bg-white drop-shadow h-auto mt-10">
          <h2 className="text-center text-3xl font-bold  text-black dark:text-white">
            Register
          </h2>
          <RegisterForm handleSubmitForm={handleSubmitForm} />
        </div>
      </div>

    </div>

  );
}
