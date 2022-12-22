import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Button from '../common/Button';
import { LOGIN_PAGE } from '../../constants/path';

export default function RegisterForm(props) {
  const { handleSubmitForm } = props;
  const [email, handleChangeEmail] = useInput();
  const [password, handleChangePassword] = useInput();
  const [name, handleChangeName] = useInput();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleSubmitForm({
      name,
      password,
      email,
    });
    setIsLoading(false);
  };
  return (
    <form className="space-y-4" onSubmit={handleRegisterForm}>
      <div className="text-black  dark:text-white">
        <label htmlFor="name">
          Name
          {' '}
          <input
            required
            onChange={handleChangeName}
            type="text"
            value={name || ''}
            id="name"
            className="p-4 bg-white dark:bg-[#323232] w-full border-b-[1px] border-gray-300  rounded  dark:border-[1px]"
          />

        </label>

      </div>
      <div className="text-black  dark:text-white">
        <label htmlFor="username">
          Email
          {' '}
          <input
            required
            onChange={handleChangeEmail}
            type="text"
            id="username"
            value={email || ''}
            className="p-4 bg-white dark:bg-[#323232] w-full border-b-[1px] border-gray-300  rounded  dark:border-[1px]"
          />

        </label>

      </div>
      <div className="text-black dark:text-white">
        <label htmlFor="password">
          Password
          <input
            required
            onChange={handleChangePassword}
            type="password"
            id="password"
            minLength={8}
            value={password || ''}
            className="p-4 bg-white dark:bg-[#323232] w-full border-b-[1px] border-gray-300 rounded  dark:border-[1px]"
          />

        </label>

      </div>
      <div className="mb-4">
        <div className="ml-auto">
          <Button
            type="submit"
            loading={isLoading}
            bgColor="primary"
            className="mb-4"
          >
            Submit
          </Button>
          <Link
            to={LOGIN_PAGE}
            className="block text-center px-4 py-2 underline text-gray-500 text-sm dark:text-white"
          >
            Do you have account?
          </Link>
        </div>
      </div>
    </form>
  );
}

RegisterForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
