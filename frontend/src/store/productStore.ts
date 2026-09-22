import { create } from "zustand";
import api from "../api/api";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string;

  fetchProducts: () => Promise<void>;
  addProduct: (product: Omit<Product, "id">) => Promise<void>;
  updateProduct: (
    id: number,
    product: Partial<Omit<Product, "id">>,
  ) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: "",

  fetchProducts: async () => {
    set({
      loading: true,
      error: "",
    });

    try {
      const response = await api.get<Product[]>("/api/products");

      set({
        products: response.data,
        loading: false,
      });
    } catch (error) {
      console.error(error);

      set({
        error: "Не удалось загрузить товары.",
        loading: false,
      });
    }
  },

  addProduct: async (product) => {
    try {
      const response = await api.post<Product>("/api/products", product);

      set((state) => ({
        products: [...state.products, response.data],
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateProduct: async (id, product) => {
    try {
      const response = await api.put<Product>(
        `/api/products/${id}`,
        product,
      );

      set((state) => ({
        products: state.products.map((item) =>
          item.id === id ? response.data : item,
        ),
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    try {
      await api.delete(`/api/products/${id}`);

      set((state) => ({
        products: state.products.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
}));