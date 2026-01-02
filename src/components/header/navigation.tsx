import { NavLink } from "@/lib/types";
import { Link } from "lucide-react";
import React from "react";

export const navLinks: NavLink[] = [
  { label: "About us", href: "/about" },
  { label: "Our Product", href: "/product" },
  { label: "Delivery", href: "/delivery" },
];

export default function Navigation() {
  return (
    <nav className="hidden lg:block xl:mr-[140px]">
      <ul className="flex gap-8 items-center">
        {navLinks.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="font-poppins text-lg hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
