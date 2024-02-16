import { useState, useEffect } from "react";

export default function ProductImages({ images }) {
  const [bigImage, setBigImage] = useState("");

  useEffect(() => {
    if (images && images.length > 0) {
      setBigImage(images[0]);
    }
  }, [images]);

  const handleBig = (img) => {
    setBigImage(img);
  };

  return (
    <>
      <div className="flex flex-col py-4 px-8 items-center gap-1 ">
        <div className=" flex  max-w-[25rem]">
          {bigImage && <img src={bigImage} className="w-[25rem]" alt="" />}
        </div>

        <div className="flex gap-2  max-w-[20rem]">
          {images &&
            images.map((img) => (
              <div
                onClick={() => handleBig(img)}
                className={`border-gray-200 ${
                  bigImage === img ? "border-gray-800" : "opacity-70"
                } border`}
                key={img}
              >
                <img src={img} alt="" className="w-full" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
