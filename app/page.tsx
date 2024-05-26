import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="max-w-lg container mx-auto mt-5 px-5">
        <div className="">
          <div className="p-8 rounded-lg shadow-xl  bg-green-800 text-center text-3xl font-bold text-white animate-pulse">Success</div>
          <Link
          href={'login'}
          className="mt-5 block text-center w-1/5 bg-slate-600 mx-auto p-3 rounded-xl font-bold"
          >Login</Link>
        </div>
      </div>
    </>
  );
}
