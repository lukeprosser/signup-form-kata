import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ErrorIcon from '../../assets/icons/error';

type Inputs = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};

export default function SignupForm({ signup }: { signup: Function }) {
  const [signupSuccess, setSignupSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signup(data);
    reset();
    setSignupSuccess(true);
  };

  return (
    <div className="p-4 bg-white rounded-lg drop-shadow-base">
      {signupSuccess ? (
        <div className="px-10 py-5 text-center text-gray-500">
          <h3 className="mb-6 text-2xl font-medium leading-10 text-shadow-sm">
            Success
          </h3>
          <p className="mb-2 leading-7 text-shadow-sm">
            Thanks for signing up!
          </p>
          <p className="mb-2 leading-7 text-shadow-sm">
            A verification email with be in your inbox shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative my-2">
            <label htmlFor="firstName" hidden>
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              {...register('firstName', { required: true })}
              aria-invalid={errors.firstName ? 'true' : 'false'}
              className={`w-full p-4 text-sm font-semibold text-gray-500 placeholder-gray-500 border-2 rounded-md ${
                errors.firstName
                  ? 'border-primary-red-500 focus:border-primary-red-500 text-primary-red-500 placeholder-primary-red-500'
                  : 'border-gray-300'
              }`}
            />
            {errors.firstName?.type === 'required' && (
              <>
                <div className="absolute top-4 right-7">
                  <ErrorIcon />
                </div>
                <p
                  role="alert"
                  className="mt-1 text-[0.65rem] font-medium italic text-right text-primary-red-500"
                >
                  First Name cannot be empty
                </p>
              </>
            )}
          </div>
          <div className="relative my-2">
            <label htmlFor="lastName" hidden>
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              {...register('lastName', { required: true })}
              aria-invalid={errors.lastName ? 'true' : 'false'}
              className={`w-full p-4 text-sm font-semibold text-gray-500 placeholder-gray-500 border-2 rounded-md ${
                errors.lastName
                  ? 'border-primary-red-500 focus:border-primary-red-500 text-primary-red-500 placeholder-primary-red-500'
                  : 'border-gray-300'
              }`}
            />
            {errors.lastName?.type === 'required' && (
              <>
                <div className="absolute top-4 right-7">
                  <ErrorIcon />
                </div>
                <p
                  role="alert"
                  className="mt-1 text-[0.65rem] font-medium italic text-right text-primary-red-500"
                >
                  Last Name cannot be empty
                </p>
              </>
            )}
          </div>
          <div className="relative my-2">
            <label htmlFor="emailAddress" hidden>
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              {...register('emailAddress', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              aria-invalid={errors.emailAddress ? 'true' : 'false'}
              className={`w-full p-4 text-sm font-semibold text-gray-500 placeholder-gray-500 border-2 rounded-md ${
                errors.emailAddress
                  ? 'border-primary-red-500 focus:border-primary-red-500 text-primary-red-500 placeholder-primary-red-500'
                  : 'border-gray-300'
              }`}
            />
            {(errors.emailAddress?.type === 'required' ||
              errors.emailAddress?.type === 'pattern') && (
              <>
                <div className="absolute top-4 right-7">
                  <ErrorIcon />
                </div>
                <p
                  role="alert"
                  className="mt-1 text-[0.65rem] font-medium italic text-right text-primary-red-500"
                >
                  Looks like this is not an email
                </p>
              </>
            )}
          </div>
          <div className="relative my-2">
            <label htmlFor="password" hidden>
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
              aria-invalid={errors.password ? 'true' : 'false'}
              className={`w-full p-4 text-sm font-semibold text-gray-500 placeholder-gray-500 border-2 rounded-md ${
                errors.password
                  ? 'border-primary-red-500 focus:border-primary-red-500 text-primary-red-500 placeholder-primary-red-500'
                  : 'border-gray-300'
              }`}
            />
            {errors.password?.type === 'required' && (
              <>
                <div className="absolute top-4 right-7">
                  <ErrorIcon />
                </div>
                <p
                  role="alert"
                  className="mt-1 text-[0.65rem] font-medium italic text-right text-primary-red-500"
                >
                  Password cannot be empty
                </p>
              </>
            )}
          </div>
          <button className="w-full p-4 my-2 text-white uppercase rounded-md bg-primary-green-500 text-shadow-sm hover:bg-primary-green-100 drop-shadow-[0px_4px_0px_#2BA671]">
            Claim your free trial
          </button>
          <p className="px-2 mt-2 text-xs font-medium leading-5 text-center text-gray-400">
            By clicking the button, you are agreeing to our{' '}
            <span className="text-primary-red-500">Terms and Services</span>
          </p>
        </form>
      )}
    </div>
  );
}
