import { render, screen } from '@testing-library/react';
import SignupPage from './signup';

describe('Signup page', () => {
  test('Renders correctly', () => {
    render(<SignupPage />);
    const headingElement = screen.getByRole('heading', {
      name: /learn to code by watching others/i,
    });
    const paragraphElement = screen.getByText((content) =>
      content.startsWith('See how experienced developers solve problems')
    );
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
