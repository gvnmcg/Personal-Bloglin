import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="light:bg-blue-clouds px-auto justify-center bg-contain bg-fixed bg-repeat dark:bg-dark-fractal ">
      <Link href={"/"}>
        <a >
          <Image
          className="w-full transition duration-500 hover:scale-50"
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
