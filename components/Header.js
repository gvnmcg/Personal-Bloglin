import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Header.module.css"
import Account from "./Account";

export default function Header() {
  return (
    <header className={style.container}>
      <Link href={"/"}>
        <a>
          🏡
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <Image
            className={style.image}
            width={500}
            height={300}
            src={"/assets/images/signPrint.png"}
            alt={"Gavin McGuire"}
          />
        </a>
      </Link>
      <Account />
    </header>
  );
}
