/**
 * skenario testing
 *
 * - LoginForm component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import LoginForm from './LoginForm';

import '@testing-library/jest-dom';

describe('LoginForm component', () => {
  it('should handle username typing correctly', async () => {
    // Arrange
    render(<LoginForm handleSubmitForm={() => {}} />);
    const usernameInput = await screen.getByTestId('username');

    // Action
    await userEvent.type(usernameInput, 'usernametest');

    // Assert
    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginForm handleSubmitForm={() => {}} />);
    const passwordInput = await screen.getByTestId('password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    await act(async () => render(<LoginForm handleSubmitForm={mockLogin} />));
    const usernameInput = await screen.getByTestId('username');
    await userEvent.type(usernameInput, 'usernametest');
    const passwordInput = await screen.getByTestId('password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Submit' });

    // Action
    await act(async () => {
      userEvent.click(loginButton);
    });

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'usernametest',
      password: 'passwordtest',
    });
  });
});
