export default function PingLoader({ size = '1rem', className, color }) {
  return (
    <span className={`inline-flex`}>
      <span
        className={`${className} animate-ping absolute inline-flex
          rounded-full opacity-75`}
        style={{
          width: size,
          height: size,
          backgroundColor: color || '#ffffff',
        }}
      ></span>
      <span
        className={`${className} relative inline-flex rounded-full`}
        style={{
          width: size,
          height: size,
          backgroundColor: color || '#ffffff',
        }}
      ></span>
    </span>
  )
}
