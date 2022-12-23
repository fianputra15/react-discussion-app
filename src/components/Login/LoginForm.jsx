import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
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
            data-testid="username"
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
            data-testid="password"
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

        </div>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
