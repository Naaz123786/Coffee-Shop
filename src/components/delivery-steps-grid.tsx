import { TDeliveryStep } from "@/lib/types";
import React from "react";
import DeliveryStep from "./delivery-step";

const deliverySteps: TDeliveryStep[] = [
  {
    id: 1,
    icon: "/icons/step-1.png",
    title: "Choose Your Coffee",
    description: "Pick from 20+ freshly roasted coffee types.",
  },
  {
    id: 2,
    icon: "/icons/food-truck.png",
    title: "Fast Delivery",
    description: "Get your coffee delivered quickly and safely.",
  },
  {
    id: 3,
    icon: "/icons/coffee-cup.png",
    title: "Enjoy Your Coffee",
    description: "Brew it fresh and enjoy every warm sip.",
  },
];

export default function DeliveryStepsGrid() {
  return (
    <div
      className="mt--8 grid gap-6 md:grid-cols-2
  lg:grid-cols-3"
    >
      {deliverySteps.map((item) => (
        <DeliveryStep key={item.id} deliveryStep={item} />
      ))}
    </div>
  );
}
