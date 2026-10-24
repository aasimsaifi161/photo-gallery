export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div
        className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"
        role="status"
        aria-label="Loading photos"
      />
      <p className="mt-4 text-gray-600 text-sm font-medium">Loading photos...</p>
    </div>
  );
}
