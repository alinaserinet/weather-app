import { CgFormatSeparator, CgHomeAlt, CgSearch } from 'react-icons/cg';
import MenuItem from './MenuItem';

export default function MainMenu() {
  return (
    <div className="fixed left-0 top-12 py-4 px-2 w-1/6 h-full">
      <div className="flex justify-center h-full items-center flex-col gap-6">
        <MenuItem link='/search-city' icon={CgSearch}>Set City</MenuItem>
        <MenuItem link='/' icon={CgHomeAlt}>Home</MenuItem>
        <MenuItem link='/forecast' icon={CgFormatSeparator}>Forecast</MenuItem>
      </div>
    </div>
  );
}
