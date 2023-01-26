import React from "react";
import Link from "next/link";

function NavLink({ text, url }) {
  return (
    <Link href={url}>
      <a className="bg-black text-white hover:opacity-75 m-7 p-3 rounded-md ">
        {text}
      </a>
    </Link>
  );
}

export default function Nav() {
  return (
    <div className="container mx-auto flex justify-center py-10">
      <NavLink text={"Code"} url={"/tag/code"} />
      <NavLink text={"Books"} url={"/tag/books"} />
      <NavLink text={"Games"} url={"/tag/games"} />
      <NavLink text={"Music"} url={"/tag/music"} />
    </div>
  );
}
