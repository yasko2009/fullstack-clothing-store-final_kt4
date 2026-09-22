import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8)",
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
              New collection
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Discover your style
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
              Modern clothing and accessories for everyday outfits.
              Find pieces that match your personal style.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/catalog"
                className="rounded-lg bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:bg-gray-200"
              >
                Shop collection
              </Link>

              <Link
                to="/login"
                className="rounded-lg border border-white px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white hover:text-black"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Collection
            </p>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Everyday essentials
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Comfortable clothes designed for everyday life.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Quality
            </p>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Simple & modern
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              A clean selection of modern clothing and accessories.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Shopping
            </p>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Easy experience
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Browse products, add them to your cart and manage your account.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}