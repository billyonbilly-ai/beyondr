function Button({
  children,
  callback,
}: {
  children: React.ReactNode;
  callback: () => void;
}) {
  return <button onClick={callback}>{children}</button>;
}

export default Button;
