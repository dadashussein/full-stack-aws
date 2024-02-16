import { useContext } from "react";
import Rating from "../utils/Rating";
import { CartContext } from "../context/CartContex";
import { Link } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export const discount = (price) => {
  return price - (price * 5) / 100;
};

const Product = ({ product }) => {
  const { _id, title, price, images } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, _id);
    toast.success(`${product?.title} səbətə əlavə edildi.`);

    //saved to localstorage

    const savedProducts = localStorage.getItem("savedProducts");
    const parsedProducts = savedProducts ? JSON.parse(savedProducts) : [];
    parsedProducts.push(product);
    localStorage.setItem("savedProducts", JSON.stringify(parsedProducts));
  };

  return (
    <div
      className="w-full max-w-[14rem] md:max-w-[18rem] bg-white
 border border-gray-200 rounded-lg shadow
  dark:bg-gray-800  dark:border-gray-700 "
    >
      <Toaster />
      <Link to={`/product/${_id}`} className="flex justify-center ">
        <img
          className=" flex md:p-2  rounded-t-lg h-[10rem]  md:h-[13rem] "
          src={images[0]}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/product/${_id}`}>
          <h5
            className="text-xl font-semibold tracking-tight 
            text-gray-900 hover:underline  dark:text-white"
          >
            {title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <Rating />
          <span
            className="bg-blue-100 text-blue-800 text-xs font-semibold 
            mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
          >
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col  items-center ">
            <span className="bg-green-500 text-white py-1 px-2 flex  text-[10px] rounded-full my-1 font-bold">
              10 % endirim
            </span>
            <span className="text-sm line-through text-red-600 ">
              {price} AZN
            </span>
            <span className="text-sm sm:text-lg md:text-xl dark:text-white font-bold ">
              {discount(price)} AZN
            </span>
          </div>
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
             rounded-lg text-sm px-2 md:px-5 md:py-2.5 text-center dark:bg-blue-600
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Səbətə at
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Product;
