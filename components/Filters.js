import React from "react";
import Link from "next/link";

export function FilterLink({ text, url }) {
  return (
    <Link href={url}>
      <a className="bg-black text-white hover:opacity-75 m-7 p-3 rounded-md ">
        {text}
      </a>
    </Link>
  );
}

export default function Filter({ categories }) {
  return (
    <div className=" py-10">
      <div className="container mx-auto flex justify-center flex-wrap">
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
