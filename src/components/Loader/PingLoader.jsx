export default function PingLoader({ size = '1rem', className }) {
  return (
    <span className={`inline-flex`}>
      <span
        className={`${className} animate-ping absolute inline-flex
          rounded-full bg-sky-500 opacity-75`}
        style={{ width: size, height: size }}
      ></span>
      <span
        className={`${className} relative inline-flex rounded-full bg-sky-500`}
        style={{ width: size, height: size }}
      ></span>
    </span>
  )
}
