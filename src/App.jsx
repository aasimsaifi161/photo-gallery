import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Browse through 30 curated photos, search by author, and mark your favourites.
          </p>
        </header>

        <main>
          <Gallery />
        </main>
      </div>
    </div>
  );
}

export default App;
