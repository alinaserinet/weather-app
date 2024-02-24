import { SpinLoader } from '../Loader'

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
          <span className="absolute top-3 right-3">
            <SpinLoader className="text-secondaru" />
          </span>
        )}
      </div>
    </div>
  )
}
