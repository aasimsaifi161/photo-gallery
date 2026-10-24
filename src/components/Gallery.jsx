import { useState, useReducer, useEffect, useCallback, useMemo } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { favouritesReducer, initFavourites } from '../reducers/favouritesReducer';
import SearchBar from './SearchBar';
import PhotoCard from './PhotoCard';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [query, setQuery] = useState('');

  const [favourites, dispatch] = useReducer(favouritesReducer, undefined, initFavourites);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleSearchChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return photos;
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(trimmed)
    );
  }, [photos, query]);

  const handleToggleFavourite = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <SearchBar value={query} onChange={handleSearchChange} />

      {filteredPhotos.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-base">No photos found matching &quot;{query}&quot;</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
