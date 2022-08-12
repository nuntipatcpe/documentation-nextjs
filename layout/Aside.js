import React, { useState } from "react";
import Link from "next/link";
import { menuBar } from "../assets/menubar";
import { GiHamburgerMenu } from "react-icons/Gi";
function aside() {
  const [serach, setSerach] = useState("");

  const menu = menuBar().filter(({ subMenu }) =>
    subMenu.some(({ path }) =>
      path.toLowerCase().includes(serach.toLowerCase())
    )
  );

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
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const mobileClinck=(name)=>{
    setActive(name);
    setToggle(!toggle);
  }
  // text-neutral-900 bg-neutral-400
  //rounded-md flex ml-5 my-5 p-3 h-10 items-center justify-items-end
  return (
    <div
      className={`top-10 w-full text-neutral-100 pl-5 h-[calc(100vh-2.5rem)] fixed z-50  ${
        toggle
          ? "max-w-[280px] left-0 overflow-auto bg-neutral-900 "
          : "sm:sticky max-w-[30px] sm:max-w-[280px] sm:overflow-auto  sm:bg-neutral-900"
      }`}
    >
      <div
        className={`i-menu fixed top-10  p-2 z-[1000] sm:hidden text-neutral-900 ${
          toggle ? "right-0" : "left-0"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <GiHamburgerMenu className=" w-5 h-5 " />
      </div>

      <div
        className={`h-20 items-center ${toggle ? "flex" : "hidden sm:flex"}`}
      >
        <input
          className={`w-full h-[2rem] p-2 rounded-md border-none text-neutral-900 ${
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
