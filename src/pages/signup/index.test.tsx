import { render, screen } from '@testing-library/react';
import SignupPage from '.';

describe('Signup page', () => {
  test('Renders heading', () => {
    render(<SignupPage />);
    const headingElement = screen.getByRole('heading', {
      name: /learn to code by watching others/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders paragraph', () => {
    render(<SignupPage />);
    const paragraphElement = screen.getByText(
      /see how experienced developers solve problems in real\-time\. watching scripted tutorials is great, but understanding how developers think is invaluable\./i
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});
