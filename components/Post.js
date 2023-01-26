import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Post({ slug, frontmatter }) {
  return (
    <div className="light:bg-white m-7 overflow-hidden rounded-xl shadow-sm hover:shadow-lg dark:bg-slate-900">
      <Link href={`/post/${slug}`}>
        <a className="flex flex-col sm:flex-row  ">
          <Image
            width={300}
            height={200}
            alt={frontmatter.title}
            src={`/${frontmatter.socialImage}`}
          />
          <div>
            <h1 className="m-4 font-bold">{frontmatter.title}</h1>
            <h2 className="m-4">{frontmatter.metaDesc}</h2>
          </div>
        </a>
      </Link>
    </div>
  );
}
