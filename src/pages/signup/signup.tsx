import Banner from '../../components/banner/banner';

export default function SignupPage() {
  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover bg-intro bg-primary-red">
      <section className="flex flex-col items-center justify-center h-full p-8">
        <div className="text-center text-white">
          <h2 className="mb-6 text-3xl font-bold leading-10">
            Learn to code by watching others
          </h2>
          <p className="font-medium leading-7">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="mt-16">
          <Banner>
            <p>
              <span className="font-bold">Try it free for 7 days</span> then
              $20/mo. thereafter
            </p>
          </Banner>
        </div>
      </section>
    </div>
  );
}
