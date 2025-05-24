import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import type { Product } from "./types/types";

function App() {
  const [state, setState] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Something went wrong while fetching products.");
        }
        const data: Product[] = await res.json();
        setState(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Header
        state={state}
        id={1}
        name="Sushan"
        age={21}
        gender="Male"
        address="Pokhara"
        personDetails={[
          {id:1, name: "Sushan", age: 55, gender: "Male", address: "Pokhara" },
        ]}
      />
    </>
  );
}

export default App;
