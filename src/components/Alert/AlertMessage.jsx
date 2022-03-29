export default function AlertMessage({ className, message }) {
  return (
    <span className={`${className} pl-2 text-gray-200 text-xs`}>{message}</span>
  )
}
