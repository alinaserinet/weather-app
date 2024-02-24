import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const TempCard = ({ min, max }) => {
  return (
    <span>
      <div className="">
        <RiArrowDropUpLine color="#ff7474" className="-mr-1 inline" size={21} />
        <small className="text-xs text-[#ff7474]">{max}°C</small>
      </div>
      <div className="">
        <RiArrowDropDownLine
          color="#00ffad"
          className="-mr-1 inline"
          size={21}
        />
        <small className="text-xs text-[#00ffad]">{min}°C</small>
      </div>
    </span>
  );
};

export default TempCard;
