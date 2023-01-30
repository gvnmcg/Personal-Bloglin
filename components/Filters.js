import React from "react";
import Link from "next/link";
import style from "../styles/Filter.module.css"

export function FilterLink({ text, url }) {
  return (
    <Link href={url}>
      <a className={style.filterLink}>
        {text}
      </a>
    </Link>
  );
}

export default function Filter({ categories }) {
  return (
    <div className={style.filterContainer}>
      <div className={style.filterOrientation}>
        {categories.map((category) => (
          <FilterLink
            key={category.title}
            text={category.title}
            url={"/filter/" + category.title}
          />
        ))}
      </div>
    </div>
  );
}
