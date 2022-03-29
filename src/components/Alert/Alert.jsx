import { PingLoader } from '../Loader'

export default function Alert({ iconColor, children }) {
  return (
    <>
      <PingLoader size=".5rem" color={iconColor} />
      {children}
    </>
  )
}
