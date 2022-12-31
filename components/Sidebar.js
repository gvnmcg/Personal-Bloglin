import React from "react";
import Link from "next/link";

function SidebarLink({ text, url }) {
  return (
    <Link href={url}>
      <a className="bg-slate-400 hover:opacity-75 p-5 rounded-md ">{text}</a>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center flex-no-wrap sidebar space-y-2 overflow-y-auto bg-evening-clouds p-7 w-74 ">
      <SidebarLink text={"🏡"} url={"/"} />
      <SidebarLink text={"Code"} url={"/"} />
      <SidebarLink text={"Tools"} url={"/"} />
    </div>
  );
}
