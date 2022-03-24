import Container from '../Container'
import { CgHomeAlt, CgSearch, CgFormatSeparator } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import Item from './Item'

export default function MobileFooter() {
  return (
    <div className="bg-gray-50 w-100 fixed bottom-0 right-0 left-0 rounded-t-xl">
      <Container className="h-full">
        <div className="flex flex-row items-center flex-wrap justify-between h-full">
          <Item icon={CgFormatSeparator} to="/test" />
          <Item icon={CgHomeAlt} to="/home" />
          <Item icon={CgSearch} to="/search-city" />
        </div>
      </Container>
    </div>
  )
}
