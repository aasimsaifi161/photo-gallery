import { useState, useEffect } from 'react';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=30');

        if (!response.ok) {
          throw new Error(`Failed to fetch photos (status: ${response.status})`);
        }

        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message || 'Something went wrong while fetching photos.');
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return { photos, loading, error };
}
