import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 text-red-500">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          className="p-4 flex flex-col justify-between border-b-2 border-r-2 border-red-500 max-sm:items-center group odd:bg-fuchsia-50"
        >
          {item.img && (
            <Image src={item.img} alt={item.title} width={350} height={350} />
          )}
          <div className="flex justify-between mt-4 max-sm:flex-col max-sm:items-center items-center h-10">
            <h1 className="text-2xl">{item.title}</h1>
            <span className="font-bold text-lg group-hover:hidden">
              ${item.price}
            </span>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
