import icons from './iconsList'

export default function WeatherIcon({ description, size, className, color }) {
  const icon = icons[description] || icons['clear sky']
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
