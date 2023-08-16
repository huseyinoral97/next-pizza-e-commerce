import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";



const ProductPage = () => {
  return (
    <div className="p-4 lg:p-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center">
      <div className="flex-1 mr-10">
        {singleProduct.img && (
          <Image src={singleProduct.img} alt="pizza" width={350} height={100} />
        )}
      </div>
      <div className="flex-[2_2_0] text-red-500">
        <h1 className="text-3xl mb-10 uppercase">{singleProduct.title}</h1>
        <p className="my-10">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
        
      </div>
    </div>
  );
};

export default ProductPage;
