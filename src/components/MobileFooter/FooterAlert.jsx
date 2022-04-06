import Alert from '../Alert'

export default function FooterAlert({iconColor, children }) {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-14 w-full text-center">
      <Alert iconColor={iconColor}>
        {children}
      </Alert>
    </div>
  )
}
