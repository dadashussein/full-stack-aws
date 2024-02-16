import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useEffect, useState } from "react";
import ProductImages from "../components/ProductImages";
import Pulse from "../utils/animation/Pulse";

const ProductDetail = () => {
  const { products, isLoading } = useProducts();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const newProduct = products.find((item) => item._id === id);
      setProduct(newProduct || {});
    }
  }, [id, isLoading, products]);

  if (isLoading) {
    return (
      <div>
        <Pulse />
      </div>
    );
  }

  return (
    <div className="flex  items-center  bg-gray-300 dark:bg-[#324968]  flex-col lg:flex-row">
      <div className="lg:w-[50%]  my-2 mx-6  flex items-center justify-center ">
        <ProductImages images={product.images && product.images} />
      </div>

      <div className="flex flex-col lg:w-[50%] my-4 p-4 mx-6 text-gray-700 dark:text-gray-300 ">
        <div className="border-b border-gray-800 dark:border-gray-200 pb-6 ">
          <p className="text-sm leading-none bg-green-500 inline rounded-lg my-2 p-1 dark:text-gray-300">
            Anbarda mövcuddur
          </p>
          <h1
            className="
          lg:text-2xl
          text-xl
          font-semibold
          lg:leading-6
          leading-7
        
          mt-2
        "
          >
            {product.title}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-800 dark:border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-400">
            Rəng
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none ">
              {product?.properties?.colour}
            </p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-800 dark:border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-400">
            Yaddaş
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none mr-3">
              {product?.properties?.size} GB
            </p>
          </div>
        </div>

        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal mt-7">
            {product.description}
          </p>
          <p className="text-base leading-4 mt-7 ">
            Məhsul kodu: 8BN321AF2IF0NYA
          </p>
          <p className="md:w-96 text-base leading-normal  mt-4">
            Son model Amerikadan idxal
          </p>
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-800 dark:border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800 dark:text-gray-400">
                Çatdırılma və qaytarma
              </p>
              <button
                className="
              cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
              rounded
            "
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4" +
                (show ? "block" : "hidden")
              }
            >
              Məhsulunuzu geri qaytarmaq üçün öz göndərmə xərclərinizi ödəməyə
              cavabdeh olacaqsınız. Göndərmə xərcləri geri qaytarılmır
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
