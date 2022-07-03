import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export default function TempCard({min, max}) {
  return (
    <span>
      <div className="">
        <RiArrowDropUpLine color="#ff7474" className="inline -mr-1" size={21} />
        <small className="text-xs text-[#ff7474]">{max}°C</small>
      </div>
      <div className="">
        <RiArrowDropDownLine
          color="#00ffad"
          className="inline -mr-1"
          size={21}
        />
        <small className="text-xs text-[#00ffad]">{min}°C</small>
      </div>
    </span>
  );
}
