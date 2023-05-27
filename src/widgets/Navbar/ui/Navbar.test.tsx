import { fireEvent, screen } from '@testing-library/react';
import { renderWithWrappers } from 'shared/lib/tests/renderWithWrappers/renderWithWrappers';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

describe('Navbar', () => {
  test('test rendering', () => {
    renderWithWrappers(<Navbar />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithWrappers(
      <div className="app">
        <Navbar />
        <Sidebar />
      </div>,
    );

    const burgerBtn = screen.getByTestId('burger-toggle');
    const sidebar = screen.getByTestId('sidebar');
    const navbar = screen.getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(burgerBtn);

    expect(sidebar).not.toHaveClass('collapsed');
  });
});
