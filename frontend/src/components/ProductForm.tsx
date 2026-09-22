import { type FormEvent, useState } from "react";
import {
  type Product,
  useProductStore,
} from "../store/productStore";

interface ProductFormProps {
  product?: Product;
  onClose?: () => void;
}

export default function ProductForm({
  product,
  onClose,
}: ProductFormProps) {
  const { addProduct, updateProduct } = useProductStore();

  const [name, setName] = useState(product?.name ?? "");
  const [price, setPrice] = useState(product?.price.toString() ?? "");
  const [category, setCategory] = useState(product?.category ?? "");
  const [image, setImage] = useState(product?.image ?? "");
  const [description, setDescription] = useState(
    product?.description ?? "",
  );

  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!name || !price || !category || !image || !description) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      if (product) {
        await updateProduct(product.id, {
          name,
          price: Number(price),
          category,
          image,
          description,
        });
      } else {
        await addProduct({
          name,
          price: Number(price),
          category,
          image,
          description,
        });
      }

      onClose?.();
    } catch (error) {
      console.error(error);
      setError("Failed to save the product.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          {product ? "Edit product" : "New product"}
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          {product ? "Update product" : "Add product"}
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Product name"
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />

        <input
          type="number"
          min="0"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Price"
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />

        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Category"
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />

        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="Image URL"
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          rows={4}
          className="resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black sm:col-span-2"
        />
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          {product ? "Save changes" : "Add product"}
        </button>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}