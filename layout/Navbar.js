import React from "react";

function navBar() {
  return (
    <div className="w-full fixed top-0 h-20 bg-neutral-900 z-50">
      <div className="container p-[1rem]">
        <div className="flex h-full items-center justify-start text-xl text-white font-bold ">
          My Blog Markdown
        </div>
      </div>
    </div>
  );
}

export default navBar;
