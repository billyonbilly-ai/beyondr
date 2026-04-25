function Button({
  children,
  callback,
  className = "",
}: {
  children: React.ReactNode;
  callback: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={callback}
      className={`border-brand-white hover:bg-brand-white hover:text-brand-orange inline-block rounded-full border bg-[#fff5f343] px-6 py-2 text-center text-base font-semibold tracking-wider transition-all duration-200 sm:text-xl ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
