import type { Product } from "../types/types";
import { toast } from "react-toastify";

type Props = {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
};

export default function ProductTable({ products, onDelete, onEdit }: Props) {
  const handleDelete = (id: number) => {
    onDelete(id);
    toast.error("Product deleted successfully!");
  };

  const handleEdit = (product: Product) => {
    onEdit(product);
    toast.info("Editing product...");
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border px-4 py-2">{p.id}</td>
              <td className="border px-4 py-2">{p.title}</td>
              <td className="border px-4 py-2">${p.price}</td>
              <td className="border px-4 py-2">{p.category}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
