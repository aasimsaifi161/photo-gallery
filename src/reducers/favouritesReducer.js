export function initFavourites() {
  try {
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to parse favourites from localStorage:', error);
    return [];
  }
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE': {
      const id = action.payload;
      if (state.includes(id)) {
        return state.filter((favId) => favId !== id);
      } else {
        return [...state, id];
      }
    }
    default:
      return state;
  }
}
