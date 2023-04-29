import { useForm, SubmitHandler } from 'react-hook-form';
import ErrorIcon from '../../assets/icons/error';

type Inputs = {
  firstName: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="p-4 bg-white rounded-lg drop-shadow-base">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="firstName" hidden>
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            {...register('firstName', { required: true })}
            aria-invalid={errors.firstName ? 'true' : 'false'}
            className={`relative w-full p-4 text-sm font-semibold text-gray-500 placeholder-gray-500 border-2 rounded-md ${
              errors.firstName
                ? 'border-primary-red-500 focus:border-primary-red-500 text-primary-red-500 placeholder-primary-red-500'
                : 'border-gray-300'
            }`}
          />
          {errors.firstName?.type === 'required' && (
            <>
              <div className="absolute top-10 right-11">
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
        <button className="w-full p-4 my-2 text-white uppercase rounded-md bg-primary-green-500 text-shadow-sm hover:bg-primary-green-100 drop-shadow-[0px_4px_0px_#2BA671]">
          Claim your free trial
        </button>
        <p className="px-2 mt-2 text-xs font-medium leading-5 text-center text-gray-400">
          By clicking the button, you are agreeing to our{' '}
          <span className="text-primary-red-500">Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
