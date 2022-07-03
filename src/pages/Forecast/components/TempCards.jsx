import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export default function TempCard({min, max}) {
  return (
    <span>
      <div className="-mb-1">
        <RiArrowDropUpLine color="#ff7474" className="inline -mr-1" size={18} />
        <small className="text-vs text-[#ff7474]">{max}°C</small>
      </div>
      <div className="-mt-1">
        <RiArrowDropDownLine
          color="#00ffad"
          className="inline -mr-1"
          size={18}
        />
        <small className="text-vs text-[#00ffad]">{min}°C</small>
      </div>
    </span>
  );
}
