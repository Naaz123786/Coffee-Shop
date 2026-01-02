import React from "react";
import { Button } from "./ui/button";
import CartIcon from "./cart-icon";

export default function HeroContent() {
  return (
    <div className="w-full">
      <h1
        className="text-3xl font-poppins leading-[1.2] font-semibold sm:text-4xl md:text-5xl 
  text-base"
      >
        Enjoy your<span className="text-primary">coffee</span>
        before your activity
      </h1>
      <p className="text-base mt-6 font-poppins leading-[1.6]">
        Boost your productivity and build your mood with a glass of coffee in
        the morning{" "}
      </p>
      <div className="flex mt-8 gap-2 items-center">
        <Button className="flex gap-2">
          Order Now
          <CartIcon />
        </Button>
        <Button className="flex gap-2" variant={"secondary"}>
          Order Now
          <CartIcon />
        </Button>
      </div>
    </div>
  );
}
