import { Link } from "react-router-dom";

export default function Item({icon: Icon, to}) {
  return (
    <span className="p-2 align-middle inline-flex">
      <Link to={to} className="p-1 inline-block">
        <Icon size="1.4rem" className="text-gray-400" />
      </Link>
    </span>
  )
}