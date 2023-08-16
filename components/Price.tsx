"use client";
import React, { useState } from "react";
type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(3);
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <p className="font-bold">${total.toFixed()}</p>
      <div className="flex mt-10">
        {options?.map((item, index) => (
          <button
            key={item.title}
            className="border-red-500 border-2 rounded-md px-5 py-1 mr-5"
            onClick={() => setSelected(index)}
            style={{
              background: selected === index ? "rgb(239 68 68)" : "#fff",
              color: selected === index ? "#fff" : "rgb(239 68 68)",
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between border-red-500 border-2 rounded-md mt-5">
        <div className="flex flex-[2_2_0] justify-between items-center w-full px-4">
          <p>Quantity</p>
          <div className="flex items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <p className="mx-4">{quantity}</p>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="bg-red-500 text-white flex py-2 px-3 cursor-pointer">
          ADD TO CART
        </div>
      </div>
    </div>
  );
};

export default Price;
