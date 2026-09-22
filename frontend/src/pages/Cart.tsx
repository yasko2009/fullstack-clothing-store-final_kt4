import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Shopping bag
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-gray-600">
            Add some products from the catalog.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Shopping bag
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Your Cart
          </h1>

          <p className="mt-2 text-gray-600">
            {items.length} product types in your cart
          </p>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-medium text-gray-600 underline hover:text-black"
        >
          Clear cart
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full rounded-xl object-cover sm:w-32"
            />

            <div className="flex-1">
              <p className="text-sm text-gray-500">
                {item.category}
              </p>

              <h2 className="mt-1 text-lg font-semibold text-gray-900">
                {item.name}
              </h2>

              <p className="mt-2 font-bold text-gray-900">
                {item.price} ₽
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
                className="h-9 w-9 rounded-lg border border-gray-300 text-lg"
              >
                -
              </button>

              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
                className="h-9 w-9 rounded-lg border border-gray-300 text-lg"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              Remove
            </button>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Total
          </p>

          <p className="mt-1 text-3xl font-bold text-gray-900">
            {total} ₽
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          Checkout
        </button>
      </div>
    </main>
  );
}