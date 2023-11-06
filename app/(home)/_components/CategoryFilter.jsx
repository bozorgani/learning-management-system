"use client";

import React, { useState } from "react";
import { filterOptions } from "./filterOptions";

function CategoryFilter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          onClick={() => setActiveIndex(index)}
          key={index}
          className={`border p-2 px-4 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50 ${
            activeIndex === index
              ? "border-purple-800 bg-purple-50 text-purple-800"
              : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
