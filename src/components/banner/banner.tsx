export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-10 py-5 text-lg text-center text-white rounded-lg drop-shadow-base bg-accent-blue-500">
      {children}
    </div>
  );
}
