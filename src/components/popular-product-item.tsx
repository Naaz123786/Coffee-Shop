import React from "react";
import { PopularProduct } from "@/lib/types";
import Image from "next/image";
import millify from "millify";
import CartIcon from "./cart-icon";
import TemperatureTags from "./temperature-tags";

export default function PopularProductItem({
  product,
}: {
  product: PopularProduct;
}) {
  return (
    <div className="bg-white p-6 rounded-md">
      <div className="relative h-[226px] w-full">
        <Image
          src="/hero-img.gif"
          alt={product.name}
          fill
          className="h-full w-full object-contain rounded-md"
        />
      </div>
      <h3
        className="mt-5 text-2xl font-poppins font-semibold
    flex justify-between items-center"
      >
        {product.name}
        <span>
          {millify(product.price, {
            precision: 2,
            space: true,
          })}
        </span>
      </h3>
      <div className="flex justify-between items-center mt-3">
        <TemperatureTags temperatures={product.temperatures} />
        <CartIcon className="text-white p-1" />
      </div>
    </div>
  );
}
