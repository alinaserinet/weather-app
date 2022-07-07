export default function Container({children, className}) {
  return (
    <div className={`container mx-auto px-3 ${className}`}>{children}</div>
  );
}