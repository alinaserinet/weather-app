export default function Card({children, className}) {
  return (
    <div className={`bg-gray-900 bg-opacity-40 rounded-xl p-3 text-white ${className || ''}`}>
      {children}
    </div>
  )
}