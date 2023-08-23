import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/products`, {
    cache: "no-cache",
  });
  console.log(res, 'huso')
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();

};


const Featured = async () => {
  const featuredProducts: ProductType[] = await getData();

  return (
    <div
      className="py-16  bg-black relative text-center md:float-left w-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/tab-bg.jpeg'" }}
    >
      <div className="w-screen overflow-x-auto max-md:px-2 lg:px-20 xl:px-20">
        <div className="py-16 w-full justify-center flex">
          <div className="flex justify-center flex-col items-center">
            <Image
              src="/separator.png"
              alt="Seperator"
              width={200}
              height={50}
            />
            <h3 className="font-semibold text-4xl text-white">
              Trending Products
            </h3>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-20">
          {featuredProducts.map((item) => (
            <div className="bg-white rounded-2xl">
              <div className="p-4">
                {item.img && (
                  <Image
                    src={item.img}
                    layout="responsive"
                    width={350}
                    height={388}
                    alt="food"
                    className="rounded-2xl hover:scale-75 duration-300"
                  />
                )}
                <button className="bg-black text-white px-4 py-2 rounded-full my-4">
                  + Add to Cart
                </button>
                <div className="border-t-2 border-[#2d2d2d] py-2 text-center">
                  <h3 className="text-xl">{item.title}</h3>
                  <h5 className="text-red-500 text-lg font-bold">
                    ${item.price}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
