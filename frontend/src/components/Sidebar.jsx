//import icon
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

import { useSidebar } from "../context/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { discount } from "./Product";

const Sidebar = () => {
  const { isOpen, handleClose } = useSidebar();
  const { cart, total, clearCart, itemAmount } = useContext(CartContext);

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      }  w-full dark:text-gray-400 text-gray-700 h-full   top-0 backdrop-blur-2xl 
      bg-white/50 dark:bg-[#1f2937e0]  fixed shadow-2xl md:w-[35vw] xl:max-w-[30vw]
        transition-all  duration-300 z-20 px-4 lg:px-[35px]`}
    >
      {/* shoping bag */}
      <div
        className="flex items-center justify-between rounded-md p-2 mt-4  
      border border-black dark:border-gray-500"
      >
        <div className="uppercase text-sm font-semibold">
          Səbət {itemAmount}
        </div>

        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* card item */}
      {cart.length > 0 ? (
        <div
          className="flex flex-col gap-y-2 h-[320px] lg:h-[350px]
          overflow-y-auto   overflow-x-hidden border-b"
        >
          {cart.map((item) => {
            return <CardItem item={item} key={item._id} />;
          })}
        </div>
      ) : (
        <div className="flex items-center flex-col justify-center h-[500px]">
          <span className="text-gray-500 font-medium">Səbət boşdur</span>
          <div className="text-[3rem] text-gray-500">
            <MdOutlineRemoveShoppingCart />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-y-3 py-4 mt-4 text-gray-700  dark:text-gray-300   ">
        <div className=" flex w-full justify-between items-center">
          {/* total */}
          <div className=" flex flex-col font-semibold">
            <span className="line-through opacity-50 text-red-600">
              {parseFloat(total).toFixed(2)} ₼ yox
            </span>
            <span className="">
              Endirim : {parseFloat((total - discount(total)) * 1).toFixed(2)} ₼{" "}
            </span>
            <span className="mr-2"></span>Cəm:{" "}
            {discount(parseFloat(total).toFixed(2))} ₼
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer rounded-md py-2 bg-red-700 
              text-white w-10 h-19 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={`/`}
          className=" border-black dark:border-gray-500   border rounded flex p-1 
          justify-center items-center text-primary  w-full  font-medium"
        >
          Səbətə Bax{" "}
        </Link>
        <Link
          to={`/`}
          className="border border-black dark:border-gray-500  rounded 
          flex p-1 justify-center items-center w-full  font-medium"
        >
          Ödənişə keç
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
