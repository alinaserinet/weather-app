import { Link } from "react-router-dom"

export default function HeaderTitle({city}) {
  if('name' in city) {
    return (
      <span>
        {city.name} - {city.country}
      </span>
    )
  }

  return (
    <span>
      <Link to="/search-city">Set your city</Link>
    </span>
  )
}