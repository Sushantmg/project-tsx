import { useEffect, useState } from "react";
import type { User } from "../types/types";
import { toast } from "react-toastify";

type Props = {
  onAdd: (user: User) => void;
  onEdit: (user: User) => void;
  editingUser: User | null;
  clearEdit: () => void;
};

export default function UserForm({ onAdd, onEdit, editingUser, clearEdit }: Props) {
  const [user, setUser] = useState<User>({
    id: Date.now(),
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    phone: "",
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    __v: 0,
  });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingUser) {
      onEdit(user);
      toast.success("User updated successfully!");
      clearEdit();
    } else {
      onAdd({ ...user, id: Date.now() });
      toast.success("User added successfully!");
    }

    setUser({
      id: Date.now(),
      email: "",
      username: "",
      password: "",
      name: { firstname: "", lastname: "" },
      phone: "",
      address: {
        city: "",
        street: "",
        number: 0,
        zipcode: "",
        geolocation: { lat: "", long: "" },
      },
      __v: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-md shadow-md my-6 max-w-xl mx-auto"
    >
      <h2 className="text-lg font-bold">
        {editingUser ? "Edit User" : "Add User"}
      </h2>
      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        required
      />
      <input
        className="w-full border px-3 py-2 rounded"
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <input
        className="w-full border px-3 py-2 rounded"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />
      <div className="flex gap-2">
        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="First Name"
          value={user.name.firstname}
          onChange={(e) =>
            setUser({
              ...user,
              name: { ...user.name, firstname: e.target.value },
            })
          }
        />
        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Last Name"
          value={user.name.lastname}
          onChange={(e) =>
            setUser({
              ...user,
              name: { ...user.name, lastname: e.target.value },
            })
          }
        />
      </div>
      <input
        className="w-full border px-3 py-2 rounded"
        type="tel"
        placeholder="Phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        placeholder="City"
        value={user.address?.city || ""}
        onChange={(e) =>
          setUser({
            ...user,
            address: { ...user.address, city: e.target.value },
          })
        }
      />
  

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingUser ? "Update User" : "Add User"}
      </button>
      {editingUser && (
        <button
          type="button"
          onClick={clearEdit}
          className="ml-2 text-red-500 underline"
        >
          Cancel
        </button>
      )}
    </form>
  );
}
