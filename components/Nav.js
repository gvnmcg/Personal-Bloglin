import React from "react";
import Link from "next/link";

function NavLink({text, url}) {
    return (
        <div className="bg-black text-white hover:opacity-75 m-7 rounded-md ">
            <div className='m-5 p-55'>
                <Link href={url}>
                    <a>{text}</a>
                </Link>  
            </div>
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
