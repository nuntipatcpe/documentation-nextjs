import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

import { PrismLight } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function Code({ children, language }) {
  const [copyAc, setCopyAc] = useState(false);
  const setTextCoppy = (e) => {
    setCopyAc(e);
    setTimeout(function () {
      setCopyAc("");
    }, 1000);
  };

  return (
    <>
      <div className="con-Icon">
        <CopyToClipboard text={children} onCopy={() => setTextCoppy(true)}>
          <FaCopy className={copyAc ? "Icon-active" : "Icon"} />
        </CopyToClipboard>
        <PrismLight language={language} style={a11yDark} className={"a"}>
          {children}
        </PrismLight>
      </div>
    </>
  );
}

export default Code;
