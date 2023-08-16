import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:p-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center max-sm:flex-col">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="bg-center bg-cover w-full h-1/3 p-8 md:h-full"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={`text-${item.color} w-1/2 h-full flex flex-col justify-between`}>
            <h1 className="uppercase font-bold">{item.title}</h1>
            <p className="text-sm my-8">{item.desc}</p>
            <button
              className={`hidden 2xl:block bg-${item.color} text-[${item.color === "black" ? "white" : "red-500"
                }] text-red-500 py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
