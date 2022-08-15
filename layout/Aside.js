import React, { useState } from "react";
import Link from "next/link";
import { menuBar } from "../assets/menubar";

// import { GiHamburgerMenu } from "react-icons/gi";

import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

function aside() {
  const [serach, setSerach] = useState("");
  const [menuData, setMenuData] = useState();
  
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const menu = menuBar().filter(({ subMenu }) =>
    subMenu.some(({ path }) =>
      path.toLowerCase().includes(serach.toLowerCase())
    )
  );

  const mobileClinck=(name)=>{
    setActive(name);
    setToggle(!toggle);
  }
  return (
    <div
      className={`top-10 w-full text-neutral-100 pl-5 h-[calc(100vh-2.5rem)] fixed z-50 sm:sticky pb-20 sm:max-w-[280px] ${
        toggle
          ? "left-0 overflow-auto bg-neutral-900 "
          : "max-w-[30px] sm:max-w-[280px] sm:overflow-auto  sm:bg-neutral-900"
      }`}
    >
      <div
        className={`i-menu fixed top-10  p-2 z-[1000] sm:hidden ${
          toggle ? "right-0 text-neutral-100" : "left-0 text-neutral-900"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        {/* <div className="w-5 h-5">Menu</div> */}
        <GiHamburgerMenu className=" w-5 h-5" />
      </div>

      <div
        className={`h-20 items-center ${toggle ? "flex" : "hidden sm:flex"}`}
      >
        <input
          className={`w-full h-[2rem] p-2 rounded-md border-none text-neutral-900 mt-5 ${
            toggle ? "flex " : "hidden sm:flex"
          }`}
          type="text"
          placeholder="serach"
          onChange={(e) => setSerach(e.target.value)}
        />
      </div>
      {menu.map(({ id, subMenu }) => {
        const data = subMenu.filter(({ path }) =>
          path.toLowerCase().includes(serach.toLowerCase())
        );
        return (
          <nav key={id}>
            <p
              className={`mx-1 my-2 items-center font-bold ${
                toggle ? "flex" : "hidden sm:flex"
              }`}
            >
              {id}
            </p>
            {data.map(({ path, name }) => {
              return (
                <Link key={path} href={path}>
                  <a
                    className={
                      active === name
                        ? `rounded-l-md flex ml-5 p-3 h-8 items-center justify-items-end text-neutral-900 bg-neutral-100 ${
                            toggle ? "flex" : "hidden sm:flex"
                          }`
                        : `rounded-l-md flex ml-5 p-3 h-8 items-center justify-items-end ${
                            toggle ? "flex" : "hidden sm:flex"
                          }`
                    }
                    onClick={() => mobileClinck(name)}
                  >
                    {name}
                  </a>
                </Link>
              );
            })}
          </nav>
        );
      })}
    </div>
  );
}

export default aside;

// <div className="aside">
//       <div className="serach">
//         <input
//           type="text"
//           placeholder="serach"
//           onChange={(e) => setSerach(e.target.value)}
//         />
//       </div>
//       {menu.map(({ id, subMenu }) => {
//         const data = subMenu.filter(({path})=>path.toLowerCase().includes(serach.toLowerCase()));
//         return (
//           <nav key={id}>
//             <p>{id}</p>
//             {data.map(({path,name}) => {
//               return (
//                 <Link key={path} href={path}>
//                   <a>{name}</a>
//                 </Link>
//               );
//             })}
//           </nav>
//         );
//       })}
//     </div>


  //   menu.sort((a, b) => {
  //   const nameA = a.subMenu.map(({name})=>name.toUpperCase()); // ignore upper and lowercase
  //   const nameB = b.subMenu.map(({name})=>name.toUpperCase()); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }

  //   // names must be equal
  //   return 0;
  // });
