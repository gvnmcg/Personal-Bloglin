import React from "react";
import Link from "next/link";

function SidebarLink({ text, url }) {
  return (
    <Link href={url}>
      <a className="hover:bg-slate-300 p-3 m-3 text-white hover:text-black">{text}</a>
    </Link>
  );
}

export default function Sidebar() {
  return (
    // <div className={styles.container}>
    <div className=" bg-black m-3 sm:ml-9 sm:h-screen">
      <div className=" flex flex-row sm:flex-col justify-center flex-no-wrap ">
        <SidebarLink text={"🏡"} url={"/"} />
        <SidebarLink text={"Cool Chords!"} url={"https://cool-chords.netlify.app/"} />
        {/* <SidebarLink text={"Resume"} url={"https://cool-chords.netlify.app/"} />
        <SidebarLink text={"About Me"} url={"https://cool-chords.netlify.app/"} /> */}
      </div>
    </div>
  );
}
