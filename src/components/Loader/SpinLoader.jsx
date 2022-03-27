import { BiLoaderAlt } from 'react-icons/bi'

export default function SpinLoader({ className, size = '1.6rem' }) {
  return (
    <BiLoaderAlt
      className={`${className} animate-spin`}
      size={size}
    />
  )
}
