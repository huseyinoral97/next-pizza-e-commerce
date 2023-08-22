import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getData();
  return (
    <div className="p-4 lg:p-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center max-sm:flex-col">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="bg-center bg-cover w-full h-1/3 p-8 md:h-full"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div
            className={`text-${item.color} w-1/2 h-full flex flex-col justify-between`}
          >
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
