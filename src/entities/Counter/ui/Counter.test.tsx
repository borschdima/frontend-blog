import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { renderWithWrappers } from 'shared/lib/tests/renderWithWrappers/renderWithWrappers';

import { Counter } from './Counter';

describe('Counter', () => {
  test('test rendering', () => {
    renderWithWrappers(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 10');
  });

  test('test increment', () => {
    renderWithWrappers(<Counter />, { initialState: { counter: { value: 10 } } });

    userEvent.click(screen.getByTestId('increment-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 11');
  });

  test('test decrement', () => {
    renderWithWrappers(<Counter />, { initialState: { counter: { value: 10 } } });

    userEvent.click(screen.getByTestId('decrement-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 9');
  });
});
