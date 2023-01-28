import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-blue-clouds px-auto dark:bg-dark-fractal bg-cover bg-fixed bg-repeat text-center ">
      <Link href={"/"}>
        <a>
          <Image
            className="w-full transition duration-500 hover:scale-75"
            width={500}
            height={300}
            src={"/assets/images/signPrint.png"}
            alt={"Gavin McGuire"}
          />
        </a>
      </Link>
    </header>
  );
}
