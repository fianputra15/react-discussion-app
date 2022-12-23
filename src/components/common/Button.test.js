import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';
/**
 * Skenario testing
 *
 * - Button Component
 * - should handle can't click or disabled when button is loading
 *
 */

describe('Button component', () => {
  it('should handle can not click when button is loading', async () => {
    // Arrange
    render(<Button type="button" loading>Click Test</Button>);
    const button = await screen.getByText('...');

    expect(button).toBeDisabled();
  });
});
