export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
          Welcome
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Clothing Store
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-gray-600">
          Find clothes that match your style.
        </p>

        <button className="mt-8 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
          Explore collection
        </button>
      </div>
    </section>
  );
}