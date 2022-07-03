export default function MainLoading() {
  return (
    <div className="absolute-center">
      <div class="flex items-center justify-center space-x-2 animate-bounce-fast">
        <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
