import { BiLoaderAlt } from 'react-icons/bi'

export default function SearchBox({
  placeholder,
  isLoading,
  className,
  setCity,
  city,
}) {
  return (
    <div className={className}>
      <div className="relative">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="search"
          placeholder={placeholder}
          className="w-full box-border bg-gray-50 p-3 px-6
         rounded-full outline-none text-dar"
          spellCheck={false}
        />
        {isLoading && (
          <BiLoaderAlt
            className="absolute top-3 right-3 animate-spin text-secondaru"
            size="1.6rem"
          />
        )}
      </div>
    </div>
  )
}
