import React from "react";
import Link from "next/link";
import style from "../styles/Sidebar.module.css"

function SidebarLink({ text, url }) {
  return (
    <Link href={url}>
      <a className={style.link}>{text}</a>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className={style.container}>
      <div className={style.orientation}>
        <SidebarLink
          text={"Cool Chords!"}
          url={"https://cool-chords.netlify.app/"}
        /> 
        <SidebarLink
          text={"Lists"}
          url={"/list"}
        />
        <SidebarLink
          text={"List post"}
          url={"/list/list-albums-2022"}
        />
      </div>
    </div>
  );
}
