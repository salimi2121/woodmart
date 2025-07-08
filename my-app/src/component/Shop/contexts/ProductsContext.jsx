import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setProducts(savedProducts);
    } else {
      fetch("/products.json")
        .then((response) => response.json())
        .then((res) => setProducts(res));
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
