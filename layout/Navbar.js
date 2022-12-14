import React from "react";
import Link from "next/link";

function navBar() {
  return (
    <div className="w-full fixed top-0 h-10 bg-neutral-900 z-50">
      <div className="container p-[1rem]">
        <div className="flex h-full items-center justify-start text-xl text-neutral-100 font-bold ">
          <Link href={'/'}>Documentation</Link>
        </div>
      </div>
    </div>
  );
}

export default navBar;
