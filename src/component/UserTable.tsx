import type { User } from "../types/types";
import { toast } from "react-toastify";

type Props = {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
};

export default function UserTable({ users, onDelete, onEdit }: Props) {
  const handleDelete = (id: number) => {
    onDelete(id);
    toast.success("User deleted successfully!");
  };

  const handleEdit = (user: User) => {
    onEdit(user);
    toast.info("Editing user...");
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">City</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="border px-4 py-2">{u.id}</td>
              <td className="border px-4 py-2">{u.username}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">
                {u.name.firstname} {u.name.lastname}
              </td>
              <td className="border px-4 py-2">{u.address?.city}</td>
              <td className="border px-4 py-2">{u.phone}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(u)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(u.id)}
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
