import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import Pulse from "../utils/animation/Pulse";

const AllProduct = () => {
  const { products, isLoading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    if (!isLoading) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, isLoading, products]);

  if (isLoading) return <div><Pulse /></div>;

  return (
    <div className="p-4 h-[60vh]">
      <div className="relative text-gray-800 dark:text-white overflow-x-auto">
        {filteredProducts.length === 0 ? (
          <p>Məhsul tapılmadı</p>
        ) : (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#1F2937] dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Məhsul adı</th>
                <th scope="col" className="px-6 py-3">Rəng</th>
                <th scope="col" className="px-6 py-3">Kategoriya</th>
                <th scope="col" className="px-6 py-3">Qiymət</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id} className="bg-white border-b dark:bg-[#374151] dark:border-gray-900">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                  </th>
                  <td className="px-6 py-4">{product?.properties?.colour}</td>
                  <td className="px-6 py-4">{product.category[0]}</td>
                  <td className="px-6 py-4">{product.price} ₼</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllProduct;
