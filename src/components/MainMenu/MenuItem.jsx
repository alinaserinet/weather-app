import { Link } from "react-router-dom";
import Card from "../Card";

export default function MenuItem({icon: Icon, link, children}) {

  return (
    <Link to={link}>
      <Card className="w-32 text-center py-5">
        <Icon
          size="1.4rem"
          className="text-gray-200 inline-block align-middle"
        />
        <span className="inline-block align-middle pl-2">{children}</span>
      </Card>
    </Link>
  );
}
