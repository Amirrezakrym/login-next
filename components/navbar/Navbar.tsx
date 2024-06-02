

import React from "react";
import {BiSolidFace,BiSolidEnvelope,BiSolidMessageAltError   } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <nav className="bg-slate-800 w-full p-4 flex justify-between items-center">
        <div>
        </div>
        <div className="flex items-center justify-around gap-4 text-white">
          <div><BiSolidMessageAltError className="text-2xl" /></div>
          <div><BiSolidEnvelope className="text-2xl" /></div>
          <div><BiSolidFace className="text-2xl" /></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
