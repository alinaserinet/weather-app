import Container from '../Container'
import { CgHomeAlt, CgSearch, CgFormatSeparator } from 'react-icons/cg'
import Item from './Item'

export default function MobileFooter() {
  return (
    <div className="bg-gray-50 w-100 fixed bottom-0 right-0 left-0 rounded-t-xl z-10 block md:hidden">
      <Container className="h-full">
        <div className="flex flex-row items-center flex-wrap justify-between h-full">
          <Item icon={CgFormatSeparator} to="/forecast" />
          <Item icon={CgHomeAlt} to="/" />
          <Item icon={CgSearch} to="/search-city" />
        </div>
      </Container>
    </div>
  )
}
