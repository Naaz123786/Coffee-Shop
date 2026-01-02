// ...existing code...
import { BaseProps } from "@/lib/types";
import React from "react";
import { cn } from "@/lib/utils";

export default function H2({ children, className }: BaseProps) {
  const words = children ? children.toString().split(" ") : [];
  const lastWord = words.length ? words.pop() : "";
  const remainingText = words.join(" ");
  return (
    <h2 className={cn("text-3xl font-semibold font-poppins", className)}>
      {remainingText}{" "}
      <span className="border-b-4 border-primary">{lastWord}</span>
    </h2>
  );
}
