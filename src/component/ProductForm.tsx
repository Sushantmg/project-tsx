import { useEffect, useState } from "react";
import type { Product } from "../types/types";
import { toast } from "react-toastify";

type Props = {
  onAdd: (product: Product) => void;
  onEdit: (product: Product) => void;
  editingProduct: Product | null;
  clearEdit: () => void;
};

export default function ProductForm({ onAdd, onEdit, editingProduct, clearEdit }: Props) {
  const [product, setProduct] = useState<Product>({
    id: Date.now(),
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    }
  }, [editingProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      onEdit(product);
      toast.success("Product updated successfully!");
      clearEdit();
    } else {
      const newProduct = { ...product, id: Date.now() };
      onAdd(newProduct);
      toast.success("Product added successfully!");
    }

    // Reset form
    setProduct({
      id: Date.now(),
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: { rate: 0, count: 0 },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md shadow-md my-6 max-w-xl mx-auto">
      <h2 className="text-lg font-bold">{editingProduct ? "Edit Product" : "Add Product"}</h2>
      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        placeholder="Title"
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        required
      />
      <input
        className="w-full border px-3 py-2 rounded"
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: +e.target.value })}
        required
      />
      <textarea
        className="w-full border px-3 py-2 rounded"
        placeholder="Description"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
      />
      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        placeholder="Category"
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      />
      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        placeholder="Image URL"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
      {editingProduct && (
        <button
          type="button"
          onClick={() => {
            clearEdit();
            toast.info("Editing cancelled");
          }}
          className="ml-2 text-red-500 underline"
        >
          Cancel
        </button>
      )}
    </form>
  );
}
