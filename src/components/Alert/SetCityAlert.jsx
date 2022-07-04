import { Link } from "react-router-dom";

export default function SetCityAlert() {
  return (
    <div className="bg-gray-900 bg-opacity-40 max-w-md p-5 text-white w-11/12 rounded-xl absolute-center">
      <div className="text-center">
        <h2 className="mb-10">Please Set Your City</h2>
        <Link
          to="/search-city"
          className="bg-orange text-black p-3 px-4 inline-block rounded-xl"
        >
          Set City
        </Link>
      </div>
    </div>
  );
}
