/**
 * skenario testing
 *
 * - CommentForm component
 *   - should handle comment input typing correctly
 *   - should call submit function when submit button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import CommentForm from './CommentForm';

import '@testing-library/jest-dom';

describe('CommentForm component', () => {
  it('should handle username typing correctly', async () => {
    // Arrange
    render(<CommentForm handleStoreComment={() => {}} />);
    const threadCommentInput = await screen.getByTestId('thread-comment');

    // Action
    await userEvent.type(threadCommentInput, 'commentTest');

    // Assert
    expect(threadCommentInput).toHaveValue('commentTest');
  });

  it('should call submit function when submit button is clicked', async () => {
    // Arrange
    const mockSubmit = jest.fn();
    await act(async () => render(<CommentForm handleStoreComment={mockSubmit} />));
    const threadCommentInput = await screen.getByTestId('thread-comment');
    await userEvent.type(threadCommentInput, 'commentTest');
    const submitButton = await screen.getByRole('button', { name: 'Submit' });

    // Action
    await act(async () => {
      userEvent.click(submitButton);
    });

    // Assert
    expect(mockSubmit).toBeCalledWith({
      threadComment: 'commentTest',
    });
  });
});
