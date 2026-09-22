import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import {
  type Product,
  useProductStore,
} from "../store/productStore";

export default function Catalog() {
  const {
    products,
    loading,
    error,
    fetchProducts,
    deleteProduct,
  } = useProductStore();

  const [isAdding, setIsAdding] = useState(false);
  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteProduct(id);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-gray-600">Loading products...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-red-600">{error}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Collection
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Catalog
          </h1>

          <p className="mt-2 text-gray-600">
            Browse and manage your products.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsAdding(true);
            setEditingProduct(null);
          }}
          className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Add product
        </button>
      </div>

      {(isAdding || editingProduct) && (
        <div className="mt-8">
          <ProductForm
            product={editingProduct ?? undefined}
            onClose={() => {
              setIsAdding(false);
              setEditingProduct(null);
            }}
          />
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-80 w-full object-cover"
            />

            <div className="p-5">
              <p className="text-sm text-gray-500">
                {product.category}
              </p>

              <h2 className="mt-1 text-lg font-semibold text-gray-900">
                {product.name}
              </h2>

              <p className="mt-2 text-xl font-bold text-gray-900">
                {product.price} ₽
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {product.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEditingProduct(product);
                    setIsAdding(false);
                  }}
                  className="rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(product.id)}
                  className="rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-black"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}