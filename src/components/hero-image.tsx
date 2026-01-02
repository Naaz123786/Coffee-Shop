import React from "react";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full">
      <div className="relative aspect-square">
        <Image
          src="/hero-img.gif"
          alt="Hero Image"
          fill
          className="object-contain rounded-full overflow-hidden"
        />
      </div>
    </div>
  );
}
