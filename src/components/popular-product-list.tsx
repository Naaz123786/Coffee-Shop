import React from "react";
import PopularProductItem from "./popular-product-item";
import { PopularProduct } from "@/lib/types";

const popularProducts: PopularProduct[] = [
  {
    id: 1,
    name: "Espresso",
    price: 3.5,
    rating: 4.8,
    image: "/images/espresso.jpg",
    temperatures: ["Hot"],
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4.5,
    rating: 4.7,
    image: "/images/cappuccino.jpg",
    temperatures: ["Hot", "Cold"],
  },
  {
    id: 3,
    name: "Latte",
    price: 5.0,
    rating: 4.9,
    image: "/images/latte.jpg",
    temperatures: ["Hot", "Cold"],
  },
];

export default function PopularProductList() {
  return (
    <div
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3
  mt-12"
    >
      {popularProducts.map((product) => (
        <PopularProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}
