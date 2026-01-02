import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { cn } from "@/lib/utils";

export default function CartIcon({ className }: { className?: string }) {
  return (
    <div className="bg-primary p-1 rounded-full text-center">
      <PiShoppingCartLight className={cn("text-3xl", className)} />
    </div>
  );
}
