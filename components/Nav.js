import React from "react";
import Link from "next/link";

function NavLink({text, url}) {
    return (
        <div >
                <Link href={url}>
                    <a className="bg-black text-white hover:opacity-75 m-7 p-3 rounded-md ">{text}</a>
                </Link>  
        </div>
    )
}

export default function Nav() {
  return (
    <nav className=" py-10">
      <div className="flex justify-center container mx-auto ">
        <NavLink text={'Code'} url={'/tag/code'}/>
        <NavLink text={'Book'} url={'/tag/books'}/>
        <NavLink text={'Game'} url={'/tag/games'}/>
      </div>
    </nav>
  );
}
