import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/ProductCard";
import UserCard from "./component/UserCard";
import ProductForm from "./component/ProductForm";
import ProductTable from "./component/ProductTable";
import UserForm from "./component/UserForm";
import UserTable from "./component/UserTable";
import type { Product, Users, User } from "./types/types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<Users>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Fetch Products from API
  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Something went wrong fetching products");
      const data: Product[] = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products.");
    }
  }

  // Fetch Users from API
  async function fetchUsers() {
    try {
      const res = await fetch("https://fakestoreapi.com/users");
      if (!res.ok) throw new Error("Something went wrong fetching users");
      const data: Users = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch users.");
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  // Product CRUD
  const addProduct = (product: Product) => {
    setProducts([...products, product]);
    toast.success("Product added!");
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
    toast.success("Product deleted!");
  };

  const editProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
    toast.info("Product updated!");
  };

  // User CRUD
  const addUser = (user: User) => {
    setUsers([...users, user]);
    toast.success("User added!");
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.success("User deleted!");
  };

  const editUser = (updatedUser: User) => {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setEditingUser(null);
    toast.info("User updated!");
  };

  return (
    <div className="p-6 space-y-10">
      <ToastContainer position="top-right" autoClose={2000} />
      
      <h1 className="text-2xl font-bold text-blue-700">Product Management</h1>
      <ProductForm
        onAdd={addProduct}
        onEdit={editProduct}
        editingProduct={editingProduct}
        clearEdit={() => setEditingProduct(null)}
      />
      <ProductTable
        products={products}
        onDelete={deleteProduct}
        onEdit={(product) => {
          setEditingProduct(product);
          toast.info("Editing product...");
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>

      <h1 className="text-2xl font-bold text-green-700 mt-10">User Management</h1>
      <UserForm
        onAdd={addUser}
        onEdit={editUser}
        editingUser={editingUser}
        clearEdit={() => setEditingUser(null)}
      />
      <UserTable
        users={users}
        onDelete={deleteUser}
        onEdit={(user) => {
          setEditingUser(user);
          toast.info("Editing user...");
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {users.map((item) => (
          <UserCard key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
