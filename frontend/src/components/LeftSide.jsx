import { useCategories } from "../context/CategoryContext";
import { useProducts } from "../context/ProductContext";
import { useEffect, useRef, useState } from "react";
import SearchForm from "./SearchForm";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";
import Product from "./Product";
import { IcArrowLeft, IcProduct, IcSignIn, IcArrowRight, CategoryIcon, ArrowUp, ArrowDown } from "../utils/icons";

const LeftSide = () => {
  const { filterCategory } = useProducts();
  const { categories } = useCategories();
  const [show, setShow] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  const { products } = useProducts();
  const menuRef = useRef(null);

  useEffect(() => {
    setSideBar(!window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setSideBar(false);
        }
      };
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [menuRef]);

  return (
    <div>
      <aside
        className={`${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40  w-64 h-screen 
      transition-transform border border-gray-200 dark:border-gray-700 `}
        ref={menuRef}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex cursor-pointer flex-col  p-2 text-gray-900 rounded-lg dark:text-white">
                <Logo />
                <SearchForm />
                <CardComponent />
              </div>
            </li>
            <li onClick={() => setShow(!show)}>
              <span className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <CategoryIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Kateqoriya</span>
                <span>{show ? <ArrowUp /> : <ArrowDown />}</span>
              </span>
            </li>

            <div className={`overflow-hidden ${show ? "translate-x-0 opacity-100" : "max-h-0 opacity-0"} transition-all duration-500 ml-10 text-sm`}>
              {categories.map((category) => (
                <ul key={category._id} className="cursor-pointer dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <li onClick={() => filterCategory(category._id)}>
                    {category.name.charAt().toUpperCase() + category.name.slice(1)}
                  </li>
                </ul>
              ))}
            </div>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IcProduct />
                <span className="flex-1 ml-3 whitespace-nowrap">Məhsullar</span>
              </a>
            </li>
            <li>
              <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IcSignIn />
                <span className="flex-1 ml-3 whitespace-nowrap">Daxil ol</span>
              </Link>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg">
                <DarkMode />
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <div className="fixed py-1 px-4 bg-gray-800 rounded-lg left-2 top-2" onClick={() => setSideBar(!sideBar)}>
        {sideBar ? <IcArrowLeft /> : <IcArrowRight />}
      </div>
      <div className="p-4 md:ml-64">
        <div className="p-4">
          <div className="flex flex-wrap justify-center gap-2 mb-2 md:gap-4 md:mb-4">
            {products.map((item) => (
              <Product product={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
