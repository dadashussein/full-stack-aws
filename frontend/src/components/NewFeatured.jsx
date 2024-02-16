import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { useProducts } from "../context/ProductContext";

const NewFeatured = () => {
  const { products } = useProducts();
  const { addToCart } = useContext(CartContext);
  const { title, description, images, _id } = products[4] || {};
  const handleAdd = () => {
    addToCart(products[4], _id);
  };
  return (
    <div
      className="bg-[#cccbcb] dark:bg-[#24354c] md:ml-40
      flex py-5 px-10 md:px-20 lg:px-40 gap-8 flex-col md:flex-row
      justify-center items-center
     "
    >
      <div className=" flex flex-col gap-8 ">
        <h1
          className=" text-4xl  dark:text-[#eee] text-center md:text-start
         lg:text-6xl"
        >
          {title}
        </h1>
        <p className="text-[#222] dark:text-[#eee]">{description}</p>
        <div className="flex gap-4">
          <button
            className="border py-1 px-2 border-[#444] dark:hover:bg-[#555] 
            transition ease-out duration-300 hover:bg-[#dcdcdc]
            dark:border-[#eee] rounded dark:text-[#eee] text-[#222] "
            onClick={handleAdd}
          >
            Səbətə at{" "}
          </button>
          <button
            className="border py-1 px-2 border-[#444] dark:hover:bg-[#555] 
            transition ease-out duration-300 hover:bg-[#dcdcdc]
            dark:border-[#eee] rounded dark:text-[#eee] text-[#222]  "
            onClick={handleAdd}
          >
            Daha çox{" "}
          </button>
        </div>
      </div>

      <div className="min-w-64">
        {images && <img className="w-[15rem] md:min-w-[15rem] lg:min-w-[20rem] " src={images[2]} alt="iphone" />}
      </div>
    </div>
  );
};

export default NewFeatured;
