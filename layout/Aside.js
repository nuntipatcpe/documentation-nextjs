import React, { useState } from "react";
import Link from "next/link";
import { menuBar } from "../assets/menubar";
function aside() {
  const [serach, setSerach] = useState("");
  const menu = menuBar().filter(({ subMenu }) =>subMenu.some(({ path }) =>path.toLowerCase().includes(serach.toLowerCase())));

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

  const [active,setActive]= useState('');
  console.log(active);
  // text-neutral-900 bg-neutral-400
  //rounded-md flex ml-5 my-5 p-3 h-10 items-center justify-items-end
  return (
    <div className="overflow-auto bg-neutral-900 top-10 max-w-[280px] w-full text-neutral-100 pl-5 sticky h-[calc(100vh-2.5rem)]">

      <div className="h-20 flex items-center">
        <input
          className="w-full h-[2rem] p-2 rounded-md border-none text-neutral-900"
          type="text"
          placeholder="serach"
          onChange={(e) => setSerach(e.target.value)}
        />
      </div>
      {menu.map(({ id, subMenu }) => {
        const data = subMenu.filter(({path})=>path.toLowerCase().includes(serach.toLowerCase()));
        return (
          <nav key={id}>
            <p className=" mx-1 my-2 flex items-center font-bold">{id}</p>
            {data.map(({path,name}) => {
              return (
                <Link key={path} href={path}>
                  <a className={active===name?'rounded-l-md flex ml-5 p-3 h-8 items-center justify-items-end text-neutral-900 bg-neutral-100':'rounded-l-md flex ml-5 p-3 h-8 items-center justify-items-end'} onClick={()=>setActive(name)}>{name}</a>
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