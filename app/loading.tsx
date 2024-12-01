export default function Loading() {
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-gray-600 text-sm font-medium">
          Generating your joke, hang tight...
        </p>
      </div>
    </div>
  );
}