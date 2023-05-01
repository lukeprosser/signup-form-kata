import Banner from '../../components/banner/banner';
import SignupForm from './signup-form';
import { signup } from '../../utils/signup';

export default function SignupPage() {
  return (
    <div className="bg-center bg-no-repeat bg-cover bg-intro bg-primary-red-500">
      <div className="flex justify-center">
        <section className="flex flex-col items-center justify-center min-h-screen px-8 py-32 max-w-screen-2xl md:gap-8 lg:gap-10 lg:flex-row">
          <div className="max-w-lg text-center text-white lg:w-1/2 lg:text-left lg:max-w-none">
            <h2 className="mb-6 text-3xl font-bold leading-10 text-shadow-sm lg:text-6xl lg:mb-10">
              Learn to code by watching others
            </h2>
            <p className="text-lg font-medium leading-7 text-shadow-sm lg:text-xl">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <div>
              <Banner>
                <p className="text-shadow-sm">
                  <span className="font-bold">Try it free for 7 days</span> then
                  $20/mo. thereafter
                </p>
              </Banner>
            </div>
            <div className="mt-8">
              <SignupForm signup={signup} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
