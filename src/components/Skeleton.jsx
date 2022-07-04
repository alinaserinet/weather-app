export default function Skeleton({className, count}) {
  return (
    new Array(count).fill().map((_,index) => (
        <div className="animate-pulse flex space-x-4" key={index}>
        <div
          className={`rounded-xl bg-gray-800 bg-opacity-40 ${className}`}
        ></div>
      </div>
    ))
  );
}
