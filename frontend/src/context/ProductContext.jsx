import{ createContext, useState, useEffect, useContext } from "react";
import Pulse from "../utils/animation/Pulse";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

const SERVER = import.meta.env.VITE_SERVER;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterCategory = (categoryId) => setSelectedCategory(categoryId);

  // Fetch products from the server on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(SERVER);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply the category filter when selectedCategory or products change
  useEffect(() => {
    const applyFilter = () => {
      const filtered = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;
      setFilteredProducts(filtered);
    };

    applyFilter();
  }, [selectedCategory, products]);

  // Show loading animation while products are being fetched
  if (isLoading) return <Pulse />;

  // Provide the products context value to the children components
  const contextValue = {
    products: filteredProducts,
    selectedCategory,
    filterCategory,
    isLoading,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
