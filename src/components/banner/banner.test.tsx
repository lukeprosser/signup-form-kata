import { render, screen } from '@testing-library/react';
import Banner from './banner';

describe('Banner', () => {
  test('Renders children', () => {
    render(
      <Banner>
        <p>Test</p>
      </Banner>
    );
    const childElement = screen.getByText('Test');
    expect(childElement).toBeInTheDocument();
  });
});
