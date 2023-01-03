import React from "react";
import Link from "next/link";

function SidebarLink({ text, url }) {
  return (
    <Link href={url}>
      <a className="bg-slate-300 hover:opacity-75 p-3 rounded-md ">{text}</a>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center flex-no-wrap space-y-2 overflow-y-auto bg-black m-5 mx-7 ml-16 p-7 w-1/8 	">
      <SidebarLink text={"🏡"} url={"/"} />
      <SidebarLink text={"Code"} url={"/"} />
      <SidebarLink text={"Tools"} url={"/"} />
    </div>
  );
}
