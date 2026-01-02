import { motion } from "motion/react";
import React from "react";
import { navLinks } from "./navigation";
import { XIcon } from "lucide-react";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-10 bg-black/95 w-ful h-screen text-white"
    >
      <div>
        <ul className="mt-12">
          {navLinks.map((link) => (
            <li className="text-center w-full py-2" key={link.href}>
              <a className="font-poppins text-xl" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <XIcon />
        </button>
      </div>
    </motion.nav>
  );
}
