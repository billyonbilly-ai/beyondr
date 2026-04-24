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
      className={`border-brand-orange hover:bg-brand-orange hover:text-brand-white inline-block rounded-full border-2 px-6 py-2 text-center text-xl font-semibold tracking-wider backdrop-blur-[2px] transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
