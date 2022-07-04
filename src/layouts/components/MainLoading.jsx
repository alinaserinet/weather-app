export default function MainLoading() {
  return (
    <div className="absolute-center">
      <div className="flex items-center justify-center space-x-2 animate-bounce-fast">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
