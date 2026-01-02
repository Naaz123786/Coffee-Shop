import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <a href="/">
      <Image height={30} width={150} src="/logo.svg" alt="Logo" />
    </a>
  );
}
