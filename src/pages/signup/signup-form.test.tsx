import { act, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupForm from './signup-form';

const mockSignup = jest.fn();

describe('Signup form', () => {
  test('Renders correctly', () => {
    render(<SignupForm signup={mockSignup} />);
    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailAddressInput = screen.getByPlaceholderText('Email Address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', {
      name: /claim your free trial/i,
    });
    const termsText = screen.getByText(
      /by clicking the button, you are agreeing to our/i
    );

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailAddressInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(termsText).toBeInTheDocument();
    expect(mockSignup).not.toHaveBeenCalled();
  });

  test('Displays required error when first name is missing', async () => {
    userEvent.setup();
    render(<SignupForm signup={mockSignup} />);
    const submitButton = screen.getByRole('button', {
      name: /claim your free trial/i,
    });
    userEvent.click(submitButton);
    const errorMessage = await screen.findByText('First Name cannot be empty');
    expect(errorMessage).toBeInTheDocument();
    expect(mockSignup).not.toHaveBeenCalled();
  });

  test('Displays required error when last name is missing', async () => {
    userEvent.setup();
    render(<SignupForm signup={mockSignup} />);
    const submitButton = screen.getByRole('button', {
      name: /claim your free trial/i,
    });
    userEvent.click(submitButton);
    const errorMessage = await screen.findByText('Last Name cannot be empty');
    expect(errorMessage).toBeInTheDocument();
    expect(mockSignup).not.toHaveBeenCalled();
  });

  test('Displays required error when email address is empty', async () => {
    userEvent.setup();
    render(<SignupForm signup={mockSignup} />);
    const submitButton = screen.getByRole('button', {
      name: /claim your free trial/i,
    });
    userEvent.click(submitButton);
    const errorMessage = await screen.findByText(
      'Looks like this is not an email'
    );
    expect(errorMessage).toBeInTheDocument();
    expect(mockSignup).not.toHaveBeenCalled();
  });

  test('Displays required error when email address is invalid', async () => {
    userEvent.setup();
    render(<SignupForm signup={mockSignup} />);
    const emailAddressInput = screen.getByPlaceholderText('Email Address');
    const submitButton = screen.getByRole('button', {
      name: /claim your free trial/i,
    });
    await userEvent.type(emailAddressInput, 'test');
    userEvent.click(submitButton);
    const errorMessage = await screen.findByText(
      'Looks like this is not an email'
    );
    expect(errorMessage).toBeInTheDocument();
    expect(mockSignup).not.toHaveBeenCalled();
  });

  test('Displays required error when password is empty', async () => {
    userEvent.setup();
    render(<SignupForm signup={mockSignup} />);
    const submitButton = screen.getByRole('button', {
      name: /claim your free trial/i,
    });
    userEvent.click(submitButton);
    const errorMessage = await screen.findByText('Password cannot be empty');
    expect(errorMessage).toBeInTheDocument();
    expect(mockSignup).not.toHaveBeenCalled();
  });

  test('Resets when input details are valid', async () => {
    userEvent.setup();
    render(<SignupForm signup={mockSignup} />);
    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailAddressInput = screen.getByPlaceholderText('Email Address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', {
      name: /claim your free trial/i,
    });

    await userEvent.type(firstNameInput, 'Test');
    await userEvent.type(lastNameInput, 'Testing');
    await userEvent.type(emailAddressInput, 'test@test.com');
    await userEvent.type(passwordInput, 'pwd123');

    await act(async () => await userEvent.click(submitButton));

    expect(firstNameInput).toHaveTextContent('');
    expect(lastNameInput).toHaveTextContent('');
    expect(emailAddressInput).toHaveTextContent('');
    expect(passwordInput).toHaveTextContent('');

    const firstNameErrorMessage = screen.queryByText(
      'First Name cannot be empty'
    );
    const lastNameErrorMessage = screen.queryByText(
      'Last Name cannot be empty'
    );
    const emailAddressErrorMessage = screen.queryByText(
      'Looks like this is not an email'
    );
    const passwordErrorMessage = screen.queryByText('Password cannot be empty');
    expect(firstNameErrorMessage).not.toBeInTheDocument();
    expect(lastNameErrorMessage).not.toBeInTheDocument();
    expect(emailAddressErrorMessage).not.toBeInTheDocument();
    expect(passwordErrorMessage).not.toBeInTheDocument();

    expect(mockSignup).toHaveBeenCalled();
  });
});
