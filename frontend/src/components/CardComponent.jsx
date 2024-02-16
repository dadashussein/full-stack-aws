import { useContext } from "react";
import {IcProduct} from "../utils/icons"
import { useSidebar } from "../context/SidebarContext";
import { CartContext } from "../context/CartContex";

const CardComponent = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const { itemAmount } = useContext(CartContext);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex  cursor-pointer items-center gap-4 relative"
    >
      <span
        className="absolute  text-white rounded-full 
         bg-red-500 text-[12px] md:text-[12px]   flex items-center justify-center
           w-[.8rem] h-[.8rem] md:w-[1rem] md:h-[1rem]
          top-0 left-3 md:left-4 "
      >
        {itemAmount}
      </span>
      <span className=" text-[23px]  md:text-[24px]">
        <IcProduct />
      </span>{" "}
      <span > Səbət</span>
    </div>
  );
};

export default CardComponent;
