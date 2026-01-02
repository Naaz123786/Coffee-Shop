import React from "react";
import SearchBox from "./search-box";
import Cart from "./cart";

export default function UtilityGroup() {
  return (
    <div className="flex gap-4 items-center">
      <SearchBox />
      <Cart />
    </div>
  );
}
