import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";

export default function Wrapper({ children, className }: BaseProps) {
  return <div className={cn("wrapper", className)}>{children}</div>;
}
