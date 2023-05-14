import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('check if component redered', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('to have class clear', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
