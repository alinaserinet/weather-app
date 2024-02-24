import icons from './iconsList'

export default function WeatherIcon({ icon: iconName, size, className, color }) {
  const icon = icons[iconName] || Object.values(icons)[0]
  const IconElement = icon.element
  const iconColor = color === 'auto' ? icon.color : color

  return (
    <IconElement
      size={size || '1.5rem'}
      className={className || ''}
      color={iconColor}
    />
  )
}
