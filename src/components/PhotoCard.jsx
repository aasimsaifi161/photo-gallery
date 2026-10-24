export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  const imageUrl = `https://picsum.photos/id/${photo.id}/400/300`;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col border border-gray-100">
      <img
        src={imageUrl}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        className="w-full h-48 object-cover bg-gray-100"
      />

      <div className="p-4 flex items-center justify-between gap-2 mt-auto">
        <span className="font-medium text-gray-800 text-sm truncate" title={photo.author}>
          {photo.author}
        </span>

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? `Remove photo by ${photo.author} from favourites`
              : `Add photo by ${photo.author} to favourites`
          }
          className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className={`w-6 h-6 transition-colors ${
              isFavourite ? 'fill-red-500 text-red-500' : 'fill-none text-gray-400'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
