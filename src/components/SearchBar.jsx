export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <label htmlFor="author-search" className="sr-only">
        Search by author name
      </label>
      <input
        id="author-search"
        type="text"
        placeholder="Search by author name..."
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
      />
    </div>
  );
}
