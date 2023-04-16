export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-10 py-5 text-center text-white rounded-lg drop-shadow-custom bg-accent-blue">
      {children}
    </div>
  );
}
