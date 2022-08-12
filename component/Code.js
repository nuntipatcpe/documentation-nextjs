import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from 'react-icons/fa';

function Code({ children }) {
    const [copyAc,setCopyAc] = useState(false);
    // console.log(children);
    const setTextCoppy = (e) => {
        setCopyAc(e);
        setTimeout(function () {
            setCopyAc("");
        }, 1000);
      };

  return (
    <>
         {/* onMouseOut={()=>setCopyAc(false)} */}
        <div className="con-Icon" >
             <CopyToClipboard text={children} onCopy={()=>setTextCoppy(true)}>
                <FaCopy className={copyAc? 'Icon-active': 'Icon'}/>
            </CopyToClipboard>
            {children}
        </div>
    </>
  );
}

export default Code;
