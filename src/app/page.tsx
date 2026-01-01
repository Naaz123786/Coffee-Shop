import AboutUs from "@/components/sections/about-us";
import CTA from "@/components/sections/cta";
import DeliveryProcess from "@/components/sections/delivery-process";
import Hero from "@/components/sections/hero";
import PopularProducts from "@/components/sections/popular-products";
import ProductShowCase from "@/components/sections/product-showcase";
import Testimonials from "@/components/sections/testimonials";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularProducts />
      <DeliveryProcess />
      <AboutUs />
      <ProductShowCase />
      <Testimonials />
      <CTA />
    </main>
  );
}
