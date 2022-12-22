import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { REGISTER_PAGE } from '../../constants/path';
import Button from '../common/Button';

export default function LoginForm(props) {
  const { handleSubmitForm } = props;
  const [email, handleChangeEmail] = useInput('');
  const [password, handleChangePassword] = useInput('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleSubmitForm({
      email,
      password,
    });

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleRegisterForm} className="space-y-4">
      <div className="text-black  dark:text-white">
        <label htmlFor="username">
          Email
          {' '}
          <input
            required
            onChange={handleChangeEmail}
            type="text"
            id="username"
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
            to={REGISTER_PAGE}
            className="block text-center px-4 py-2 underline text-gray-500 text-sm dark:text-white"
          >
            Create Your Account
          </Link>
        </div>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
