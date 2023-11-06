"use client";

import { useState } from "react";
import Image from "next/image";
import { menuList } from "./sidebarData";

function SideBarNav() {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b z-50">
        <Image src="./logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="flex flex-col text-left">
        {menuList.map((item, index) => (
          <div key={index} className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${activeIndex===index?'bg-purple-50 text-purple-800' : null}`}
          onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBarNav;
