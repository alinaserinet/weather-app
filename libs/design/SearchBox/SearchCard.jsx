export default function Card({ className, children }) {
  return (
    <div
      className={`${className} bg-gradient-to-l from-white via-gray-100 to-gray-200 p-3 rounded-xl
       text-light text-sm opacity-90`}
    >
      {children}
    </div>
  )
}
