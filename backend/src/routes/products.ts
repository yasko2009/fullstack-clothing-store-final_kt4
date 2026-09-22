import { Router } from "express";
import { products, Product } from "../data/products";

const router = Router();

// Получить все товары
router.get("/", (_req, res) => {
  res.json(products);
});

// Получить один товар
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

// Добавить товар
router.post("/", (req, res) => {
  const { name, price, category, image, description } = req.body;

  if (!name || !price || !category || !image || !description) {
    return res.status(400).json({
      message: "All product fields are required",
    });
  }

  const newProduct: Product = {
    id:
      products.length > 0
        ? Math.max(...products.map((product) => product.id)) + 1
        : 1,
    name,
    price: Number(price),
    category,
    image,
    description,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// Изменить товар
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products[productIndex] = {
    ...products[productIndex],
    ...req.body,
    id,
  };

  res.json(products[productIndex]);
});

// Удалить товар
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  res.json({
    message: "Product deleted",
    product: deletedProduct,
  });
});

export default router;